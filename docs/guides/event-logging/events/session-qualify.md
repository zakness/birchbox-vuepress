[← Event Logging docs](/guides/event-logging)

# Event: `session-qualify`

The `session-qualify` event is logged when the user visits their second page of the session. See the [`visit` method](/src/utils/logging/index.js) for exact logic.

## Event data

Prop|Type|Description|Example
---|---|---|---
context|string|This would typically be the pageType for the current page, but we’re currently hardcoding it to `'window'`. Not really sure why...|`'window'`
