# AdaptiveWrapper

Wraps children in a `div` with gutters that [adapt](/docs/enhancers/Adapter.md) to the current breakpoint.

Gutters can be applied using margins or padding. Padding is necessary for full-bleed styles, typically background color. Margin is useful for making sure your content doesn’t touch the viewport edge, which comes in handy for border separators.

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through.|
gutter| `oneOf('padding', 'margin', 'none')` or `{ narrow: oneOf('padding', 'margin', 'none'), wide: oneOf('padding', 'margin', 'none') }` |Which CSS property to use for the gutters (or to remove them entirely).|`{ narrow: 'padding', wide: 'margin' }`|
id|string|Passed through.|
style|object|Passed through.|

## Gutter widths

For viewport widths smaller than the max wide width, the gutter width values are derived from the `grid.edgeGutterWidth` redux state values. For viewports larger than the max wide width, the gutters are determined with `calc()` to ensure that the content doesn’t exceed the max width.
