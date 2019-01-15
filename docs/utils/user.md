# User logged in state

This document aims to clarify how to determine the logged-in state of a user, as there is some nuance that may not be immediately obvious.

## User id vs auth token

The crux of the nuance is that ‘logged in’ may mean different things depending on the context.

When determining what to display to the user (inside components, routing logic), we typically want to know who the user is (name, subscriber status, points, etc.) or if we can’t know who they are (they’re logged out). In this case, the datum to check is the user id in the redux store.

However, when making API calls we usually don’t need the user id. Instead we need the auth token, which is stored in localStorage so it can be made available quickly and without prompting the user to log in again. In this case, that token is enough to tell the API who the user is.

## Inside components

The best practice inside components is to wait to display anything until we know whether or not the user is logged in.

### `MaskContainer` example

If you’re only depending on user data, `MaskContainer` might be all you need:

```jsx
const MyComponent = (props) =>
  <MaskContainer status={props.userStatus}>
    {props.isLoggedIn && `Welcome back, ${props.firstName}!`}
    {!props.isLoggedin && `Have we met?`}
  </MaskContainer>

MyComponent.mapStateToProps = (state) => ({
  firstName: state.user.data.firstName,
  isLoggedIn: !!state.user.data.id,
  userStatus: getStatusFromState('user'),
})
```

### `PromiseLoader` example

If the logged in state determines which (if any) data you load via `PromiseLoader`, use the user id as an input propType:

```jsx
const MyComponent = (props) =>
  <MaskContainer status={props.status}>
    You have {props.boxes.length} boxes!
    {!props.userId && <Link to='/sign-in'>Sign in to see them</Link>}
  </MaskContainer>

MyComponent.propTypes = {
  boxes: PromiseLoader.PropTypes.output.array,
  userId: PromiseLoader.PropTypes.input.number,
  status: CustomPropTypes.status,
}

MyComponent.mapStateToProps = (state) => ({
  userId: state.user.data.id,
})

MyComponent.loadPromisedProps = (props) => props.userId ? getBoxes() : Promise.resolve([])
```

## Outside components

If you’re outside a component but still need the logged in state, use the `getLoggedIn` util, which waits for the user state to be ready:

```jsx
import { getLoggedIn } from 'utils/user'

getLoggedIn().then((loggedIn) =>
  console.log(`user is ${loggedIn ? 'logged in' : 'logged out'}`)
)
```

Or, if you need to know immediately and don’t care if user data is ready, use `hasAuthToken`:

```jsx
import { hasAuthToken, xapi } from 'utils/api'

if (hasAuthToken()) {
  xapi({ '/user/something' }).then(...)
}
```
