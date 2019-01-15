# UI Vertical

The **UI vertical** is a value that determines whether certain views, components, and data are tailored to the women’s or men’s experience.

## Getting UI vertical

The vertical value is stored in Redux.

If you’re inside a [navigation event](src/components/Routing/docs/guides/navigation-event.md), you should get the vertical from `router.next.view` and fall back to `ui.vertical` in case the route is unisex. This is typically only done in route hook code:

```jsx
MyRouteHook.mapStateToProps = ({ router, ui }) => ({
  vertical: _.get(router, 'next.view.vertical', ui.vertical),
})
```

All other times, the source of truth for the current vertical is `ui.vertical`:

```jsx
MyView.mapStateToProps = ({ ui }) => ({
  vertical: ui.vertical
})
```

Every time the value changes it is saved to localStorage. This is then used to hydrate the initial store state in the user’s next session (in case they land on a unisex view).

## Setting UI vertical

The vertical should be set every time the user visits a vertical-specific view. Unisex views should not update the vertical; They should just use what’s in Redux.

Sometimes we know a view is vertical-specific based on the route path, other times we need to fetch the view’s initial data first. The following sections explain how to implement each of these cases.

### Route vertical

If a view’s vertical is known a priori, you can specify `vertical` as a prop on the [`ViewRoute`](src/components/Routing/ViewRoute.js) component and it will automatically update Redux via the `PAGE_VIEW` dispatch:

```jsx
<ViewRoute path='/magazine' vertical='women'>
  ...
</ViewRoute>
```

### Promised data vertical

If a view is vertical-specific but you don’t know the vertical until data is fetched, load the data once the route matches and then call the `viewRouteUpdate` action before the `PAGE_VIEW` action is dispatched.

See [`ProductViewLoader`](src/components/RouteHooks/ProductViewLoader.js) for an example.
