[← Routing docs](/guides/routing)

# `getVerticalRoutes`

[`getVerticalRoutes`](/src/components/Routing/getVerticalRoutes/index.js) is a convenience method for defining routes for a single view that should be rendered at `/women` and `/men` subroutes in `COM`.

Take `ShopView` for example. In `ES`, `ShopView` is rendered at `/tienda`. In `UK`, `ShopView` is rendered at `/shop`. But in `COM`, `ShopView` is rendered at `/shop/women` and `/shop/men`. Furthermore, in `COM`, `/shop` should redirect to `/shop/women` or `/shop/men` depending on the UI vertical.

With `getVerticalRoutes`, you can define this sort of route config once instead of three times.

## Method signature

```
getVerticalRoutes(options) => array<ViewRoute>
```

`options` shape:

Key|Type|Description|Default
---|---|---|---
pathBase|string\|(vertical) => string|If a string it should be the base of the path to which `/<vertical>` will be appended in `COM` (or just the actual path in `ES` and `UK`). If a function, it will be passed the vertical and should return the correct path. Typically the function form is used, as it maps directly to the ones defined in the [`URLS`](/src/constants/urls-com.js) constants.|
pathSuffix|string|Other path segment(s) to be appended after `/<vertical>`.|`''`
redirect|bool|If `true`, the base path will redirect to one of the vertical subroutes. Switch this off if you don’t want this ‘vertical default’ feature.|`true`
requireAuth|bool|If `true`, wraps `children` in [`RequireAuth`](/src/components/RouteHooks/RequireAuth.js). Useful if you want the vertical redirect to be based on the user’s preferred vertical, for example for subscription-related routes.|`false`
children|node|The children that each `ViewRoute` will render|
...props|various|Other props that get passed directly to each `ViewRoute`|

## Why isn’t this a Component?

Using `getVerticalRoutes` inside route configs is a bit awkward. Wouldn’t it be better to have something like this?

```jsx
<VerticalViewRoutes pathBase={URLS.shopHome} ... >
  <PageViewDispatcher>
    <ShopView />
  </PageViewDispatcher>
</VerticalViewRoutes>
```

It would! Unfortunately since `getVerticalRoutes` needs to return multiple elements (and React 15 Components can only return a single element or `null`) we must define it as a function for now. We can make it a Component when we upgrade to React 16, which supports [Fragments](https://reactjs.org/docs/react-component.html#fragments).
