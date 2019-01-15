[← Event Logging docs](/guides/event-logging)

# Default Event Data

## All events

The following default data are set on all events. See [`log` source code](/src/utils/logging/index.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
breakpoint|string|UI Breakpoint (`'wide'` ~= desktop, `'narrow'` ~= mobile)|`'wide'`
context|string|Event context (almost always pageType)|`'home'`
event|string|Event name|`'undefined-event'`
path|string|Page path|`'/discover'`
vertical|string|UI vertical|`'women'`
vid|string|Visitor ID|`'a4336f35-f58d-4de9-892c-923cdcf084f3'`
vidCount|number|Visit count|`2`

## All GTM events

The following data are set on all events sent to GTM. See [`triggerTagManager` source code](/src/utils/logging/tagManager.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
customerEmailHash|string|sha256 hash of user email address|`'eb5965addeaa717bbac9c301c84fd1d84bf5b2'`
customerId|string|User ID|`'3298027'`
isPastMenSubscriber|bool|Is not an active men subscriber but has canceled a men subscription in the past|`false`
isPastWomenSubscriber|bool|Is not an active women subscriber but has canceled a women subscription in the past|`false`
isMenSubscriber|bool|Is active men subscriber|`false`
isSubscriber|bool|Is active men or women subscriber|`false`
isWomenSubscriber|bool|Is active women subscriber|`false`
timestamp|number|Current Unix time|`1547083455666`
sessionId|string|Logging-specific GUID for current session|`'a18b150a-f116-4082-9d3a-988074c6a14b'`

## Cart GTM events

The following default data are set on all GTM events on the cart page. These data are essentially a lightweight “cart”, a subset of the data passed to the [`place-order`](/guides/event-logging/events/place-order.md) event. See [`triggerTagManager` source code](/src/utils/logging/tagManager.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
orderItemsId|array[string]|Stringified Cart product IDs|`['26283','33033']`
orderItemsName|array[string]|Cart product names|`['Benefit Cosmetics 24-Hr Brow Setter Gel','Laura Geller New York Fortifying Lashes Eyelash Primer']`
orderItemsPrice|array[string]|Cart product prices|`['24.00','22.00']`
orderItemsQuantity|array[number]|Cart product quantities|`[1,1]`

## All Event API events

Event API payloads have a unique structure: an array of data where the data object passed to `log` is just one item in the array. The other array items are quite varied in nature, and, since they are not able to be overridden via `log`, are not worth documenting here. If you want to know what is sent, view the [`triggerBirchbox` source code](/src/utils/logging/birchbox.js).
