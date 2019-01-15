[← Event Logging docs](/guides/event-logging)

# Console Debugging

While you can inspect network traffic for event logging calls, it’s much easier to understand what event data is being logged by enabling console logging.

Log event.api payload data:

```jsx
localStorage.setItem('debugEventApi', true)
```

Log tag manager data:

```jsx
localStorage.setItem('debugTagManager', true)
```
