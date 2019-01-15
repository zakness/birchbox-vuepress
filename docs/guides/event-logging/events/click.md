[← Event Logging docs](/docs/guides/event-logging)

# Event: `click`

A `click` event is logged when the user clicks or taps on an element.

## Components that log clicks for you

Clicking is one of if not the most common types of user interactions. Thus, there are a few base components that have click logging built in, removing the need to manually call `log` in every click handler.

The primary examples of these components are [`Clickable`](/docs/components/Clickable.md), [`Button`](/docs/components/Button.md), and [`Link`](/docs/components/Link.md). Read the docs for each of those components to see how you can pass extra click event data if you need to.

Using these components (and others like them) helps us consolidate the logic for click logging and keeps our data more consistent.

## Event data

_Default event data is added on a per-component basis as detailed below:_

**[`Clickable`](/docs/components/Clickable.md) and [`Button`](/docs/components/Button.md) components**

Prop|Type|Description|Default
---|---|---|---
mod|string|The module (area or component) of the site housing the clicked element.|`'site-content'`
title|string|Text representing the clicked element.|Clicked element’s `innerText`, or `[non-text content]` if falsey
type|string|The type of clicked element.|`'button'`

**[`Link`](/docs/components/Link.md) component**

Prop|Type|Description|Default
---|---|---|---
mod|string|The module (area or component) of the site housing the clicked element.|`'site-content'`
id|string|The link URL (yes it’s a weird name for it).|
title|string|Text representing the clicked element.|Clicked element’s `innerText`, or `[non-text content]` if falsey
type|string|The type of clicked element.|`'link'`

**[`Carousel`](/docs/components/Carousel.md) component**

The `Carousel` component logs `click` events on the left and right arrows.

Prop|Type|Description|Default
---|---|---|---
mod|string|The module (area or component) of the site housing the clicked element.|`'carousel'`
action|string|The result of clicking the arrow: `'move-back'` or `'move-forward'`|

**[`ProductThumb`](/src/components/ProductThumb/index.js) component**

The `ProductThumb` component logs click-throughs, that is, if the user clicks on a link within ProductThumb that sends them to the PDP.

Prop|Type|Description|Default
---|---|---|---
mod|string|The module (area or component) of the site housing the clicked element.|`'product-thumb'`
productId|number|The Product ID.|
