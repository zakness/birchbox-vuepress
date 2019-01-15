[← Event Logging docs](/guides/event-logging)

# Event: `view`

The `view` event is logged every time the [`page-view`](/guides/event-logging/events/page-view.md) event is logged. This exists because `page-view` events go to a different Event API logging bucket than all other events, so this enables capturing page views in both buckets. See [`triggerBirchbox` source code](/src/utils/logging/birchbox.js) for exact logic.

## Event data

Prop|Type|Description|Default
---|---|---|---
mod|string|The module (area or component) of the site.|`'window'`
title|string|?|`'View'`
...||The rest of the data set on the original `page-view` event|
