[← Routing docs](/docs/guides/routing)

# Writing a Route Hook

In this document we’ll be building the [`<ProductViewLoader>`](/src/components/RouteHooks/ProductViewLoader.js) route hook from scratch to demonstrate the following concepts:
- Loading the primary view-specific data before the view mounts (and showing [`<PageNotFound>`](/src/components/PageNotFound/index.js) if it fails)
- Updating [`router.next`](/docs/guides/routing/redux-state.md#routernext) after the route matches but before the view mounts
- Adding view-specific params to the `page-view` logging event

We’ll use the desire to simplify [`<ProductView>`](/src/views/catalog/ProductView/index.js) specifically as the motivation for building `<ProductViewLoader>`.

## Loading view-specific data

One way `<ProductView>` can be simplified is to remove the logic for changing the UI vertical based on the product data. This means the product data needs to be downloaded before the View mounts. Here’s a first pass where all `<ProductViewLoader>` does is load the product and pass it to `<ProductView>`:

```jsx
<ViewRoute path={URLS.product(':id')} pageType='pdp'>
  <ProductViewLoader>
    {({ product }) =>
      <PageViewDispatcher>
        <ProductView product={product}>
      </PageViewDispatcher>
    }
  </ProductViewLoader>
</ViewRoute>
```
```jsx
import { loadProduct } from 'data/catalog'

const ProductViewLoader = ({ product, children, status }) => {
  return status === STATUS.READY
    ? children({ product })
    : <div />
}

ProductViewLoader.propTypes = {
  id: PromiseLoader.PropTypes.input.number,
  product: PromiseLoader.PropTypes.output.product,
  status: CustomPropTypes.status,
}

ProductViewLoader.mapStateToProps = ({ router }) => ({
  id: Number(_.get(router.next || router, `match.params.id`)),
})

ProductViewLoader.loadPromisedProps = (props) =>
  loadProduct(props.id).then((product) => {
    return { product }
  })

export default connect(PromiseLoader.compose(ProductViewLoader))
```

Notice that we don’t render `children` until we have a `product` object. This keeps `<ProductView>` simple, as it doesn’t have to check the prop — it will always be a real product.

Also take a look at the `id` prop in `mapStateToProps`. Since `<ProductViewLoader>` is a route hook, it’s mounted after `VIEW_ROUTE_MATCH` dispatches but before `PAGE_VIEW`, so it needs to initially get the `id` from `router.next`. Then, after `PAGE_VIEW` dispatches it re-renders, so it needs to get the `id` from `router`.

## Updating `router.next`

Now let’s actually handle updating the vertical:

```diff
+   import { loadProduct } from 'data/catalog'
+ import { viewRouteUpdate } from 'actions/router'

  const ProductViewLoader = ({ product, children, status }) => {
    return status === STATUS.READY
      ? children({ product })
      : <div />
  }

  ProductViewLoader.propTypes = {
    id: PromiseLoader.PropTypes.input.number,
    product: PromiseLoader.PropTypes.output.product,
    status: CustomPropTypes.status,
+   uiVertical: CustomPropTypes.vertical,
  }

- ProductViewLoader.mapStateToProps = ({ router }) => ({
+ ProductViewLoader.mapStateToProps = ({ router, ui }) => ({
    id: Number(_.get(router.next || router, `match.params.id`)),
+   uiVertical: ui.vertical,
  })

+ ProductViewLoader.mapDispatchToProps = {
+   viewRouteUpdate,
+ }

  ProductViewLoader.loadPromisedProps = (props) =>
    loadProduct(props.id).then((product) => {
+     const vertical = product.isUnisex ? props.uiVertical : product.vertical
+     props.uiVertical !== vertical && props.viewRouteUpdate({ vertical })
      return { product }
    })

  export default connect(PromiseLoader.compose(ProductViewLoader))
```

Here we introduce the `viewRouteUpdate` action which dispatches `VIEW_ROUTE_UPDATE`. As you might imagine, it takes a partial `view` object and merges it into the current `router.next.view` state. This is how navigation event data can be updated asynchronously.

## Adding `page-view` logging params

Next we have a requirement to attach product-specific data to the `page-view` logging event that fires when the user views the PDP. We do this by passing `logParams` to [`<PageViewDispatcher>`](/docs/components/PageViewDispatcher.md):

```diff
  <ViewRoute path={URLS.product(':id')} pageType='pdp'>
    <ProductViewLoader>
-     {({ product }) =>
+     {({ product, logParams }) =>
-       <PageViewDispatcher>
+       <PageViewDispatcher logParams={logParams}>
          <ProductView product={product}>
        </PageViewDispatcher>
      }
    </ProductViewLoader>
  </ViewRoute>
```
```diff
  ...

  const ProductViewLoader = ({ product, children, status }) => {
+   const logParams = product
+     ? {
+       productId: String(product.id),
+       brandId: String(product.brandId),
+       brandName: product.brandName,
+       title: product.title,
+     }
+     : undefined
    return status === STATUS.READY
-     ? children({ product })
+     ? children({ product, logParams })
      : <div />
  }

  ...
```

## Rendering `<PageNotFound>` for bad data

It is possible for users to type a bogus pid in the URL, which would cause the `loadProduct` call to throw an error. If this happens we want to show `<PageNotFound>`:

```diff
  <ViewRoute path={URLS.product(':id')} pageType='pdp'>
    <ProductViewLoader>
      {({ product, logParams }) =>
        <PageViewDispatcher logParams={logParams}>
-         <ProductView product={product}>
+         {product
+           ? <ProductView product={product} />
+           : <PageNotFound />
+         }
        </PageViewDispatcher>
      }
    </ProductViewLoader>
  </ViewRoute>
```
```diff
  ...

  ProductViewLoader.loadPromisedProps = (props) =>
    loadProduct(props.id, props.fallbackTov1).then((product) => {
      const vertical = product.isUnisex ? props.uiVertical : product.vertical
      props.uiVertical !== vertical && props.viewRouteUpdate({ vertical })
      return { product }
-   })
+   }).catch(() =>
+     ({})
+   )

  ...
```
