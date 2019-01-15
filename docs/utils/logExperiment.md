# logExperiment

[`logExperiment`](/src/utils/logging/index.js) must be called for each experiment currently running. It registers which variant the session was assigned. Without this call, we’ll have no way to measure the results of the experiment.

```jsx
logExperiment('experiment-name', 'variant-name')
```

This call is memoized on its arguments so the same registration call is not made more than once per session (it would be okay to do so, it’s just unnecessary).
