[← Event Logging docs](/guides/event-logging)

# Event: `session-start`

The `session-start` event is logged when the user visits their first page of the session. See the [`visit` method](/src/utils/logging/index.js) for exact logic.

## Event data

Prop|Type|Description|Example
---|---|---|---
context|string|This would typically be the pageType for the current page, but we’re currently hardcoding it to `'window'`. Not really sure why...|`'window'`
isNewVisitor|bool|Is this the first visit for this visitor ID?|`false`
