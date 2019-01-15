[← Routing docs](/docs/guides/routing)

# `<Redirect>`

[`<Redirect>`](/src/components/Routing/Redirect/index.js) is a wrapper around [React Router’s `<Redirect>`](https://reacttraining.com/react-router/web/api/Redirect) that allows for preserving the query string when the redirect executes.

To avoid confusion, this component should always be used instead of the one provided by React Router.

## Props

`<Redirect>` accepts the same props as the React Router component with one additional prop: `preserveQueryString`.

Prop|Type|Description|Default
---|---|---|---
exact|bool|If `true`, `from` must match the entire URL path.|`true` *See [react-router#5612](https://github.com/ReactTraining/react-router/pull/5612)*
from|string|Redirect only if the current path matches this. Can only be used when `<Redirect>` is a child of [`<Switch>`](https://reacttraining.com/react-router/web/api/Switch).|
push|bool|If `true`, redirecting will push a new entry onto the history instead of replacing the current one.|`false`
to|string\|object|The URL or location object to redirect to.|
preserveQueryString|bool|See [behavior](#preservequerystring-behavior) below.|`undefined`

### `preserveQueryString` behavior

If `preserveQueryString` is `false`, the query string will not be preserved.

If `preserveQueryString` is `true`, the query string will be preserved. If both the current location and the `to` prop location have a query string, they will be merged with the `to` values taking precedence in the case of matching keys.

If `preserveQueryString` is `undefined`, the query string will only be preserved if the `from` prop is set. This is because the `from` prop signals that we are essentially ‘renaming’ an old path to a new one, so it is much more likely that we’d want to preserve the query string. If you do not want to preserve the query string when using `from`, simply provide `preserveQueryString={false}`.

Note that the `preserveQueryString` prop only applies to the location we are redirecting away from. It does not affect the query string set in the `to` prop, if any.

## Examples

Old Location|Redirect|New Location
---|---|---
`/foo?a=b`|`<Redirect to='/bar'>`|`/bar`
`/foo?a=b`|`<Redirect to='/bar' preserveQueryString>`|`/bar?a=b`
`/foo?a=b`|`<Redirect to='/bar?c=d'>`|`/bar?c=d`
`/foo?a=b`|`<Redirect to='/bar?c=d' preserveQueryString>`|`/bar?a=b&c=d`
`/foo?a=b`|`<Redirect from='/foo' to='/bar'>`|`/bar?a=b`
`/foo?a=b`|`<Redirect from='/foo' to='/bar' preserveQueryString={false}>`|`/bar`
`/foo?a=b`|`<Redirect from='/foo' to='/bar?c=d'>`|`/bar?a=b&c=d`
`/foo?a=b`|`<Redirect from='/foo' to='/bar?c=d' preserveQueryString={false}>`|`/bar?c=d`

All examples also work with location objects, i.e. `{ pathname: '/bar', search: '?c=d' }`.

## GitHub Issue

It turns out React Router’s `<Redirect>` preserved the query string prior to v4. This change was not documented, so an [issue](https://github.com/ReactTraining/react-router/issues/5818) has been raised with the React Router team. Follow along, if you’d like!
