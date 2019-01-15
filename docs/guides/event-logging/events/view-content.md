[← Event Logging docs](/guides/event-logging)

# Event: `view-content`

The `view-content` event is logged when the user views a PDP. See [`ProductViewLogger`](/src/views/catalog/ProductView/ProductViewLogger.js) for exact logic.

## Event data

Prop|Type|Description|Example
---|---|---|---
contentIds|array[string]|Array containing a single item, the stringified product ID.|`['12345']`
contentType|string|Type of content. Just hardcoded to `'product'` at this time.|`'product'`
