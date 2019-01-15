## Status Codes

Code|Constant|Value
---|---|---
Failed|FAILED|-1
Uninited|UNINITED|0
Pending|PENDING|1
Ready|READY|2

Status code constants are accessible via the `STATUS` global object:

```jsx
STATUS.[status code constant name]
```

A status code can be generated for any state object which has the following shape:

```jsx
{
  data: [object]
  isInited: [boolean]
  isFetching: [boolean]
}
```

## getStatusFromState

`getStatusFromState` accepts state object(s) or state object-producing redux store key(s) as arguments and returns a status code.

Single state object:

```jsx
const state = {
  data: {},
  isInited: true,
  isFetching: false,
}

getStatusFromState(state)
// → STATUS.READY
```

When passed multiple objects, the “least ready” status is returned.

```jsx
const stateFailed { data: undefined, isInited: true, isFetching: false }
const statePending = { data: {}, isInited: false, isFetching: true }

getStatusFromState(stateFailed, statePending)
// → STATUS.FAILED

// array args work too:
getStatusFromState([ stateFailed, statePending ])
// → STATUS.FAILED
```

Redux store keys that reference state objects can be used as well:

```jsx
getStatusFromState('user')
// → status of store.getState('user')

// Multiple keys work as well:
getStatusFromState('user', 'boxes')
getStatusFromState([ 'user', 'boxes' ])
```

## isStateReady

If you just want to know if a state(s) is ready, use the method `isStateReady`. It accepts the same arguments as `getStatusFromState`.

```jsx
const state = { data: {}, isInited: true, isFetching: false }

isStateReady(state)
// → true
```

## ensureStateReady

If you want to wait to perform an action until state is ready, use the convenience method `ensureStateReady`. It accepts the same arguments as `getStatusFromState` and `isStateReady` and returns a Promise that is resolved when the state(s) are ready. **Note:** This only works for data that is eagerly initialized and updated.
