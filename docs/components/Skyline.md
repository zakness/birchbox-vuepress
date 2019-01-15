# Skyline

[`Skyline`](/src/components/Skyline/index.js) is a full-bleed component that pairs a content area (title, dek, and CTA) with an image. Skylines typically serve as page headers, placed at the top.

Skyline layouts are quite different between `wide` and `narrow` breakpoints, which explains why many props are breakpoint-specific. In `wide`, the content overlays the background image, while in `narrow` the image is displayed first with the content sitting just below it.

## Props

### backgroundPatternSrcWide
```
PropTypes.string
```
URL for a background image that will be repeated horizontally. The image will be scaled vertically to fill the entire Skyline height. Can be used to for a patterned or solid color backdrop — you’re only limited by your imagination!

This prop is not applicable in `narrow` because `imgSrc` takes up the entire width.

**ProTip!** When paired with a `contentHeightWide` that’s shorter than `heightWide`, this background pattern can be used to create the illusion that `imgSrcWide` extends below the Skyline.

### className
```
PropTypes.string
```
Passed through to the container div.

### color
```
PropTypes.string
```
The text and CTA color. Can be a color name (`colorTurquoise`), theme color name (`majorColorDark`), or hex code (`#41b1c0`).

Only used in `wide`, since in `narrow` the content area is always rendered on a white background.

Default: `colorNeutral1F`

### contentAlignmentWide
```
PropTypes.oneOf([ 'left', 'center', 'right' ])
```
Whether the content area should be aligned to the `left`, `right`, or `center` of the Skyline. If `center`, the text and CTA are also centered.

Only used in `wide`. In `narrow` the content is always centered.

### contentColumnCountWide
```
PropTypes.number
```
The number of [GridLayout](/docs/components/GridLayout.md) columns the content area spans.

Only used in `wide`. In `narrow` the content is always full-width.

Default: `5`

### contentHeightWide
```
PropTypes.number
```
The height (px) of the content area (aligned to the top of the Skyline). If `undefined`, the content area will be full-height.

One use case for this is so that the content can be correctly vertically centered when using `backgroundPatternSrcWide` to fake a shorter background.

Only used in `wide`. In `narrow` the content height simply grows with the content.

### cta
```
PropTypes.string
```
The CTA text. If omitted, no CTA is shown.

### dek
```
PropTypes.string
```
The dek markdown (optional).

### dekCopySize
```
PropTypes.string
```
The dek [copy size](/src/styleds/copySizes.js).

Defaults to `copy16`.

### eyebrow
```
PropTypes.string
```
The eyebrow markdown. Displayed just above the `title`.

### heightWide
```
PropTypes.number
```
The Skyline height (px). Note that `imgSrcWide` and `backgroundPatternSrcWide` will be scaled vertically to match this height.

Only used in `wide`. In `narrow` the height is not constrained.

Default: `400`

### imgSrc
```
PropTypes.string
```
URL for the `narrow` full-bleed image displayed above the content. Recommended dimensions are 750x560 @2x. The bottom 56px of the image will be obscured by the content notch.

This value is also used as a fallback for `imgSrcWide` in the `wide` breakpoint.

### imgSrcWide
```
PropTypes.string
```
URL for the `wide` background image displayed behind the content (overlaying  `backgroundPatternSrcWide` if set). Recommended dimensions are 3840x800 @2x. The image is centered horizontally, scaled to match the Skyline height, and does not repeat.

Only used in `wide`. Use `imgSrc` for the `narrow` image.

### onClick
```
PropTypes.func
```
Clicking the CTA calls this function. If `cta` is non-empty, either `onClick` or `url` must be set.

### referrerName
```
PropTypes.string
```
If set, `referrerName` is prepended to `title`. This is typically used on channel-optimized RAF pages, i.e. “Daenerys thinks you’ll love Birchbox”.

> N.B.: We probably want to refactor this out if possible.

### promoCopy
```
PropTypes.string
```
The promo copy markdown (optional).

### promoCopySize
```
PropTypes.string
```
The promo [copy size](/src/styleds/copySizes.js).

### title
```
PropTypes.string
```
The title text (optional but recommended).

### titleCopySize
```
PropTypes.string
```
The title [copy size](/src/styleds/copySizes.js).

Defaults to `copySerif34`.

### url
```
PropTypes.string
```
CTA URL. If `cta` is non-empty, either `onClick` or `url` must be set.
