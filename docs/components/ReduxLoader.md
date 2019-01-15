# ReduxLoader

[`ReduxLoader`](/src/components/ReduxLoader/index.js) is a component that enables lazy loading of redux data.

## Background

We like using redux for shared application state, but in many cases we eagerly load state on app load, when the user logs in, and if the state changes on the server. This can result in unnecessary API calls if the state is never used during the session. This problem is exacerbated if the API calls are not particularly performant.

The solution to this problem is to lazy-load the data. In other words, only load the data when a component that depends on it is mounted and invalidate the data (reset the redux state) when it changes on the server. This introduces some boilerplate, especially if the state changes while dependent components are already mounted. `ReduxLoader` aims to reduce that boilerplate.

## Props

Prop|Type|Description|Default
----|----|----|----
stateKey|string|The redux state object key where the data is stored.|
loadAction|func|The redux action that will load the data.|

`ReduxLoader` dispatches `loadAction` if the redux data at `stateKey` has a status of `UNINITED`. This check is done when `ReduxLoader` mounts and if the status or `stateKey` itself changes.

## Usage

You can use `ReduxLoader` directly or wrap it to make a loader specific to the stateKey(s) you want. Typically the latter is done because the data tends to be needed in multiple locations. See loader examples in the [ReduxLoader directory](/src/components/ReduxLoader).
