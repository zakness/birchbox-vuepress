[← Event Logging docs](/docs/guides/event-logging)

# Event: `add-to-cart`

The `add-to-cart` event is logged when a product is added to the cart. If the user adds more than one quantity of a product to the cart in a single action, this event still only fires once for that action.

See [`logger` middleware source](/src/middleware/logger/index.js) for exact logic.

## Event data

Prop|Type|Description|Example
---|---|---|---
context|string|This would typically be the pageType for the current page, but we’re currently hardcoding it to `'window'`. Not really sure why...|`'window'`
productId|number|Product ID|`12345`
