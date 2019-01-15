# promise middleware

[`promise` middleware](/src/middleware/promise/index.js) takes a single action backed by a promise and splits it into multiple actions that correspond to the state changes of the underlying promise.

## Usage

Add a property named `promise` to an action and populate it with a promise.

```jsx
const loadRegions = () => ({
  type: 'REGIONS_LOAD',
  promise: loadRegionsData(),
})
```

When this action is taken the following things will occur:

1. An action with the signature ```{ type: `@@REMOTE/${type}_REQUEST`, data }``` will be dispatched
2. The promise will be executed
3.
a. On promise success an action with the signature ```{ type: `@@REMOTE/${type}_SUCCESS`, data }``` will be dispatched
b. Or on promise failure an action with the signature ```{ type: `@@REMOTE/${type}_FAILURE`, data }``` will be dispatched
