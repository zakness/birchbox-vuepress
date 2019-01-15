[← Routing docs](/docs/guides/routing)

# `<ViewRoute>`

[`<ViewRoute>`](/src/components/Routing/ViewRoute/index.js) is a wrapper around [React Router’s `<Route>`](https://reacttraining.com/react-router/web/api/Route) that is used specifically for view components.

When `<ViewRoute>` mounts (or is re-rendered with a different location), it will dispatch `VIEW_ROUTE_MATCH`, which adds the `match` and `view` objects to the `router.next` Redux state.

## Props

`<ViewRoute>` accepts two classes of props: Those passed to React Router’s `<Route>`, and those attached to the `view` object dispatched in the `VIEW_ROUTE_MATCH` action.

**`<Route>` props**

Prop|Type|Description|Default
---|---|---|---
exact|bool|If `true`, `path` must match the entire URL path.|`true` *See [react-router#5612](https://github.com/ReactTraining/react-router/pull/5612)*
path|string|The path pattern to match.|
strict|bool|If `true`, trailing slashes matter when matching `path`|`false`

**`view` props**

See [`view` object](/docs/guides/routing/redux-state.md#view) in the Routing API docs.

### Gotcha: default `view` props

If a `view` prop is omitted from a `<ViewRoute>` declaration and it does not have a value set in `ViewRoute.defaultProps`, then when that view mounts the value of that `view` prop will remain unchanged from the previous view.

For example, if `pageType` did not have a default of `''`, then routes without a `pageType` set would inherit the `pageType` from the previous route. Conversely, `vertical` does not have a default value so that unisex routes (those without a `vertical` prop) do not alter the current UI vertical.

Keep this in mind when adding new `view` props (or altering existing ones).
