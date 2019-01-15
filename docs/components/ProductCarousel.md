# ProductCarousel

[`ProductCarousel`](/src/components/ProductCarousel/ProductCarousel/index.js) displays products in a [Carousel](/docs/components/Carousel.md).

## Props

Prop|Type|Description|Default
---|---|---|---
dotsType|oneOf|See [Carousel dotsType](/docs/components/Carousel.md)|
excludeId|number|Product ID to omit from the list.|
layout|oneOf(`boxed|centered`)|See below for layout definitions.|boxed
limit|number|Number of products to show, regardless of the length of `productIds`|12
productIds|arrayOf(number)|Pool of product IDs to render|
productsDidChange|func(pids)|Passed an array of the product IDs that are rendered. Fired whenever it changes (even on mount). See usage note below.|
renderThumbFooter|func(id):node|The returned component is rendered at the bottom of each ProductThumb with an enforced height of `heightControlAdaptive`|

## Layouts

To enforce design consistency ProductCarousel supports different layouts that each control multiple properties:

- **boxed**: ProductThumbs are 75% width with `adaptiveGutterLeft` margin and `borderNeutralF1` border. The ProductThumbs are rendered with their `vertical` layout.
- **centered**: ProductThumbs are full width with `adaptiveGutter` padding. The ProductThumbs are rendered with their `centered` layout.

In order to achieve the full-bleed effect of the `boxed` layout, all ProductCarousels are assumed to be rendered edge-to-edge. In other words, they control their own horizontal spacing (gutters).

## Bad Products

Products whose data cannot be loaded are filtered out using ProductThumb’s `onLoadFailure` prop. When this happens, products are filled in from the `productIds` array until we’ve reached `limit` products again.

## `productsDidChange` Usage

If you care about what products are rendered (and so pass in a value for `productsDidChange`) you must always render ProductCarousel to the DOM so that it can execute that callback. For example, if you want to hide the carousel (or its parent component) when there are no products, you must hide the component (via `utilStyles.hide` perhaps) rather than rendering `null`.
