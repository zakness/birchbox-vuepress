[← Routing docs](/guides/routing)

# The Navigation Event

When we talk routing, we’re typically talking about one thing: handling a navigation event. A navigation event starts when the location changes and ends when a view mounts. More specifically, a navigation event can be split into three phases:

1. The location changes (a new pathname, query string, hash, state, or a combination thereof). This is triggered by the initial app load and by calls to [`history`](/utils/history.md) methods like `history.push()` (clicking a link) or `history.replace()` (rendering a `<Redirect>`).
2. The new location is matched to a potential view based on pathname. Optionally, checks are performed to determine if the user can access the view (go to next phase) or should be redirected elsewhere (go back to phase 1). These checks can be async if they require data to be downloaded.
3. The view mounts, allowing the user to see the page at the given location.

In our codebase these phases correspond respectively to the following Redux actions that update the [`router`](/src/reducers/router.js) Redux state:

1. `LOCATION_CHANGE`
2. `VIEW_ROUTE_MATCH`
3. `PAGE_VIEW`

We do not dispatch these actions directly. Instead, they are dispatched in the lifecycle methods of our custom routing components. This allows us to configure routes and handle navigation event phases declaratively.

----

See the [Basic Navigation Example](/guides/routing/nav-example-basic.md) guide next to learn how routes are configured and how exactly the `router` state changes during a navigation event.
