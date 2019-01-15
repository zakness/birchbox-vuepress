# log

[`log`](/src/utils/logging/index.js) takes an event data object and sends it to external data collection services. Depending on your use case, you may call `log` directly or write a wrapper around it (e.g. [`logPlaceOrder`](/src/utils/logging/placeOrder.js)).

The only required prop in the event object is `event`, which is the name of your event.

Values passed to `log` will override [default data](`/docs/guides/event-logging/default-data.md`) if set.

```jsx
log({
  event: 'my-event', // required
  context: 'my-context', // will override default value
  customParam: 'value', // optional
})
```

See the [Event Logging docs](/docs/guides/event-logging) for more info on event logging in general.
