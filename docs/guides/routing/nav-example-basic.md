[← Routing docs](src/components/Routing/docs/index.md)

# Basic Navigation Example

To illustrate how routes are configured and how the [navigation event phases](/guides/routing/navigation-event.md) update Redux, let’s look at an extremely simple example app that uses our routing components with just two views: `<ViewA>` and `<ViewB>`:

```jsx
import { Switch } from 'react-router-dom'
import Router from 'components/Routing/Router'
import PageViewDispatcher from 'components/Routing/PageViewDispatcher'
import ViewRoute from 'components/Routing/ViewRoute'

const ViewA = ComponentLoader({ loader: () => import('views/ViewA') })
const ViewB = ComponentLoader({ loader: () => import('views/ViewB') })

ReactDOM.render(
  <Router>
    <Switch>
      <ViewRoute path='/a' pageType='a'>
        <PageViewDispatcher>
          <ViewA />
        </PageViewDispatcher>
      </ViewRoute>
      <ViewRoute path='/b' pageType='b'>
        <PageViewDispatcher>
          <ViewB />
        </PageViewDispatcher>
      </ViewRoute>
    </Switch>
  </Router>,
  document.getElementById('root')
)
```

> Curious about `ComponentLoader`? Check out [the docs](/enhancers/ComponentLoader.md).

Let’s say the user loads the app initially on `/a`. The initial app load navigation event has a few unique qualities, so let’s skip that for now and assume it’s been processed and the user is looking at `<ViewA>`. In this case the [`router` Redux state](/guides/routing/redux-state.md) looks like this:

```js
{
  isNavigating: false,
  location: { pathname: '/a', ... },
  match: { path: '/a', ... },
  next: null,  
  pageViewCount: 1,
  prev: null,
  view: { pageType: 'a', ... },
}
```

> N.B. Some objects’ shapes have been truncated because they are not relevant to this example.

Now let’s assume the user clicks a link to `/b`. This triggers a navigation event.

## (1) Location change

First, since the location changed, React Router creates a new `location` object which causes the Router’s [`<LocationChangeDispatcher>`](/src/components/Routing/Router/LocationChangeDispatcher.js) to dispatch a `LOCATION_CHANGE` action. This sets `isNavigating` to `true` and creates a [`next` object](/guides/routing/redux-state.md#routernext):

```diff
 {
-  isNavigating: false,
+  isNavigating: true,
   location: { pathname: '/a', ... },
   match: { path: '/a', ... },
-  next: null,
+  next: {
+    location: { pathname: '/b', ... },
+    changed: { pathname: true, ... },
+  },   
   pageViewCount: 1,
   prev: null,
   view: { pageType: 'a', ... },
 }
```

Note that the root [`location`](/guides/routing/redux-state.md#location), [`match`](/guides/routing/redux-state.md#match), and [`view`](/guides/routing/redux-state.md#view) are unchanged, as the user is still looking at `<ViewA>` at this point.

## (2) View route match

Then, `<Switch>` evaluates the new location and looks for a child [`<ViewRoute>`](/components/ViewRoute.md) to render. Since `/b` matches the second `<ViewRoute>`, it mounts and dispatches `VIEW_ROUTE_MATCH`. This adds the route-specific data to `next`:

```diff
 {
   isNavigating: true,
   location: { pathname: '/a', ... },
   match: { path: '/a', ... },
   next: {
     location: { pathname: '/b', ... },
     changed: { pathname: true, ... },
+    match: { path: '/b', ... },
+    view: { pageType: 'b', ... },
   },   
   pageViewCount: 1,
   prev: null,
   view: { pageType: 'a', ... },
 }
```

## (3) View mounts

Finally, `<ViewRoute path='/b'>` renders its child, [`<PageViewDispatcher>`](/components/PageViewDispatcher.md), which dispatches `PAGE_VIEW` and also renders its child, `<ViewB>`. This completes the navigation event, setting `isNavigating` to `false`, moving the current state into [`prev`](/guides/routing/redux-state.md#routerprev), moving the `next` into current, and bumping `pageViewCount`:

```diff
 {
-  isNavigating: true,
+  isNavigating: false,
-  location: { pathname: '/a', ... },
+  location: { pathname: '/b', ... },
-  match: { path: '/a', ... },
+  match: { path: '/b', ... },
-  next: {
-    location: { pathname: '/b', ... },
-    changed: { pathname: true, ... },
-    match: { path: '/b', ... },
-    view: { pageType: 'b', ... },
-  },
+  next: null,
-  pageViewCount: 1,
+  pageViewCount: 2,
-  prev: null,
+  prev: {
+    location: { pathname: '/a', ... },
+    match: { path: '/a', ... },
+    view: { pageType: 'a', ... },
+  },
-  view: { pageType: 'a', ... },
+  view: { pageType: 'b', ... },
 }
```

----

This concludes the basic navigation example. See the next guide, [Navigation with Route Hooks](/guides/routing/nav-example-routehook.md), for a more complicated (and common) scenario.
