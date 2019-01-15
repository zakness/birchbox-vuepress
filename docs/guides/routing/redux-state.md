[← Routing docs](/docs/guides/routing)

# `router` Redux State

## `router`

The `router` redux state is updated by [navigation event](/docs/guides/routing/navigation-event.md) actions.

Key|Type|Description
---|---|---
isNavigating|bool|Whether or not we’re inside a navigation event.
location|[location object](#location)|The current location.
match|[match object](#match)|The current match.
next|[next object](#routernext)|The next router state if we’re in a navigation event, `null` otherwise.
pageViewCount|number|The number of times `PAGE_VIEW` has been dispatched during the session.
prev|[prev object](#routerprev)|The router state two `PAGE_VIEW`s ago (the previous one is the current state), or `null` if this is the initial view.
view|[view object](#view)|The current view props.

## `location`

An augmented React Router [`location`](https://reacttraining.com/react-router/web/api/location) object.

Key|Type|Description|Default|Example
---|---|---|---|---
hash|string|[`Location.hash`](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)|`''`|`'#heading'`
key|string|Unique ID for this location||`ac3df4`
pathname|string|[`Location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname)||`'/discover'`
search|string|[`Location.search`](https://developer.mozilla.org/en-US/docs/Web/API/Location/search)|`''`|`'?filters=minRating:4'`
state|object|Optional user-provided state.|`{}`|`{ view: 'addons' }`
query|object|Result of parsing `search` into an object using the [`query-string`](https://github.com/sindresorhus/query-string) package.|`{}`|`{ filters: 'minRating:4' }`

## `match`

The React Router [`match`](https://reacttraining.com/react-router/web/api/match) object.

Key|Type|Description|Example
---|---|---|---
isExact|boolean|`true` if the entire URL was matched (no trailing characters).|
params|object|Key/value pairs parsed from the URL corresponding to the dynamic segments of the path|`{ id: 34567 }`
path|string|The path pattern used to match. Useful for building nested <Route>s|`/product/:id`
url|string|The matched portion of the URL. Useful for building nested <Link>s|`/product/34567`

## `view`

An object containing view-specific attributes that are set via props on [`<ViewRoute>`](/docs/components/ViewRoute.md) or by dispatching `VIEW_ROUTE_UPDATE`. Default values are defined as [`ViewRoute.defaultProps`](/docs/components/ViewRoute.md#gotcha-default-view-props).

Key|Type|Description|Default
---|---|---|---
disableTagManager|bool|`true` to disable tag manager for this view|`false`
pageType|string|The view’s page type, used mostly for logging|`''`
showFooter|bool|Show the footer?|`true`
showHeader|bool|Show the header?|`true`
showTrim|bool\|string|Show the trim? If `'gifting'`, show the gift trim|`true`
showTray|bool\|string|Show the Promo Tray|`true`
showTrimBorder|bool|Show the trim’s bottom border? Usually disabled when there’s a skyline|`true`
vertical|string|The view’s vertical. Can be left empty for unisex pages.|

## `router.next`

The next `router` state while in a [navigation event](/docs/guides/routing/navigation-event.md). These values are often inspected by route hooks.

Key|Type|Description
---|---|---
changed|[changed object](#routernextchanged)|Key/value pairs describing what part of the location has changed.
location|[location object](#location)|The next location.
match|[match object](#match)|The next match or `undefined` if a [`<ViewRoute>`](/docs/components/ViewRoute.md) has not matched yet.
view|[view object](#view)|The next view props or `undefined` if a [`<ViewRoute>`](/docs/components/ViewRoute.md) has not matched yet.

## `router.next.changed`

Flags which parts of `router.next.location` have changed compared to `router.location`. Useful for determining if only the query string has changed, for example.

Key|Type|Description
---|---|---
pathname|bool|Has the pathname changed?
search|bool|Has the query string changed?

## `router.prev`

The router state prior to the current one.

Key|Type|Description
---|---|---
location|[location object](#location)|The previous location.
match|[match object](#match)|The previous match.
view|[view object](#view)|The previous view props.
