# BlurOverlay

[`BlurOverlay`](/src/components/BlurOverlay/index.js) is a wrapper that overlays a string or component on top of its children, blurring and fading the children.

## Props

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through to outermost wrapper div.|
overlay|string or node|Message or component that you want to overlay. Will cover the children and be centered. If not set, no blurring or fading will occur.|
overlayClassName|string|Applied to the overlay div.|
