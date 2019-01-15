# Carousel

[`Carousel`](/src/components/Carousel/index.js) is a highly customizable component that allows the user to rotate through a list of child components.

Play around at /dev/carousels if ya want!

N.B.: Be mindful of nesting Carousel within flex containers, as it will probably break.

## Props

Prop|Type|Description|Default
---|---|---|---
adaptHeight|boolean|Should the slider change height with the current displayed item. Currently ignored if `itemsToShow` > 1. Will also be ignored if `fillParent` is `true`.|false
align|oneOf(left, center)|How to horizontally align the current item. If `center`, the current item is centered in the carousel.|left
arrowColor|string|Color to apply to the arrow and arrow label|colorNeutralCD
autoplay|bool|Start playing on mount? Paused if the user interacts with the carousel.|false
autoplayDelay|number|Milliseconds between changing slides|6000
backArrowClassName|string|CSS class to apply to the back arrow|
currentIndex|number|Use if controlling index via props|
defaultIndex|number|Use to set initial index and then turn control over to the user|
didChange|func(currentIndex)|Called when change animation completes|
dotsType|oneOf|none, default (below), skyline, above|default
edgeGutterWidth|number or 'adaptive'|Space at the beginning and end of the carousel track. Useful for ‘cutoff’ effect and/or if you want this to be a different value than the gutter between items. If a number, use that many px. If `adaptive`, use 16 or 24px according to the breakpoint.|0
fillParent|boolean|Should the carousel height match its parent container’s height?|false
forwardArrowClassName|string|CSS class to apply to the next arrow|
gutterWidth|number or 'adaptive'|Space between items. If a number, use that many px. If `adaptive`, use 16 or 24px according to the breakpoint. If `showItemDivider` is `true`, this prop represents the space on each side of the divider (for a total space between items of `gutterWidth * 2 + 1`).|0
infinite|boolean|Loop? Autoplaying carousels loop while active.|false
itemClassName|string|CSS class string to apply to the child items in the carousel|
itemsToShow|number|Number of items to display at once. Must be a whole number. Ignored if `itemWidth` is set.|1
itemWidth|number|Item width. If <= 1, it represents a percentage of the carousel width. Otherwise, it is used as the pixel value. Takes precedence over `itemsToShow`.|
renderArrow|func({ onClick, direction }) => Component|Render your own arrow component for the given direction. If set, `backArrowClassName`, `forwardArrowClassName`, `showArrowText`, and `arrowColor` are ignored.|
restart|bool|A flag to restart a carousel from the start of the list|false
showArrows|bool|Show prev/next arrows?|false
showArrowText|bool|Show "Next"/"Previous" text under respective arrows|false
showItemDivider|bool|Show a dividing line between items?|false
willChange|func(nextIndex, prevIndex)|Called when the index will change.|

## `itemWidth` vs `itemsToShow`

`itemWidth` will ensure items have that width at the cost of potentially cutting some items off at the edges. `itemsToShow` will ensure that number of items (including gutters, if any) neatly fit into the carousel width. Use whichever is more appropriate for your use case. If both are set only `itemWidth` is used.

## Item grouping

Carousel will figure out how many items can be fully visible at a time based on the (automatically measured) container width. This is called `groupSize`. If the user clicks a dot, clicks an arrow, or swipes, the carousel will attempt to move `groupSize` items forward or back. If the user pans or if the code sets a specific index, the carousel moves to that specific item as expected.

If the `align` prop is `center`, `groupSize` is set to 1 regardless of other props. This is because centering the current item necessarily means focusing on one at a time.

In all cases, the logic will prevent moving the carousel beyond the first or last item.
