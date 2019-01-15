[← Routing docs](src/components/Routing/docs/index.md)

# Navigation with Route Hooks

Route hooks are components that make sure the user has access to a view and redirects them somewhere else if they don’t. Let’s look at what happens when route hooks are encountered during a [navigation event](/docs/guides/routing/navigation-event.md).

We’ll start with the app from our [basic navigation example](/docs/guides/routing/nav-example-basic.md) and add a new constraint: The user must be logged in to see `<ViewB>`. If they aren’t logged in, they will be redirected to `<LoginView>` to log in.

To accomplish this, we’ll wrap `<ViewB>`’s `<PageViewDispatcher>` with a [`<RequireAuth>`](/src/components/RouteHooks/RequireAuth.js) route hook:

```diff
  import { Switch } from 'react-router-dom'
+ import DisallowAuth from 'components/RouteHooks/DisallowAuth'
  import PageViewDispatcher from 'components/Routing/PageViewDispatcher'
+ import RequireAuth from 'components/RouteHooks/RequireAuth'
  import Router from 'components/Routing/Router'
  import ViewRoute from 'components/Routing/ViewRoute'

+ const LoginView = ComponentLoader({ loader: () => import('views/LoginView') })
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
+         <RequireAuth>
            <PageViewDispatcher>
              <ViewB />
            </PageViewDispatcher>
+         </RequireAuth>
        </ViewRoute>
+       <ViewRoute path='/sign-in' pageType='signIn'>
+         <DisallowAuth>
+           <PageViewDispatcher>
+             <LoginView />
+           </PageViewDispatcher>
+         </DisallowAuth>
+       </ViewRoute>
      </Switch>
    </Router>,
    document.getElementById('root')
  )
```

As in the basic example, let’s start with the user logged out on `/a`. When they click a link to `/b`, `LOCATION_CHANGE` and `VIEW_ROUTE_MATCH` are dispatched as before. However, this time `<ViewRoute path='/b'>`’s direct child is `<RequireAuth>`, which renders different things depending on the user’s auth state. Since the user is not logged in, it renders a `<Redirect to='/sign-in'>` instead of its `children` prop.

This is the crux of a route hook’s design: Perform some checks (and/or optionally download some data) and only render `children` when everything is in order. This way we separate the routing logic from the view render logic, allowing view components to be simpler. In other words, views can assume that if they are mounted, they are allowed to be viewed.

Back to our scenario. The user has just been redirected to `/sign-in`, which means `LOCATION_CHANGE` has been dispatched and `<ViewRoute path='/sign-in'>` has mounted and dispatched `VIEW_ROUTE_MATCH`. Now [`<DisallowAuth>`](/src/components/RouteHooks/DisallowAuth.js) is mounted, which just performs a pass-through render of its `children` since the user is not logged in. `PAGE_VIEW` is dispatched and `<LoginView>` is mounted.

Finally, the user logs in and then (one presumes) is redirected to `/b`, which triggers a navigation event that successfully passes through `<RequireAuth>` and lands on `<ViewB>`.
