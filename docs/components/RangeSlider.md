# RangeSlider

[`RangeSlider`](/src/components/RangeSlider/index.js) is a control that allows the user to pick a min and max value from a range of values. Values can be changed by dragging the min and max handles or by clicking anywhere on the track.

## Props

Prop|Type|Default|Description
----|----|-------|-----------
isDragRangeEnabled|`bool`|`true`|If `true`, the selected range can be dragged left and right using the middle handle. If `false`, hides the middle handle.
values|`array<any>`||All possible values. These will be distributed evenly along the track and the thumb edges will snap to these values when the user stops dragging.
value|`array<any>`||Array of length `2`. `value[0]` is the start of the selected range and `value[1]` is the end (incorrectly ordered values are automatically swapped). Use if parent component should own the state. Either `value` or `defaultValue` is required.
defaultValue|`array<any>`||Array of length `2`. `defaultValue[0]` is the start of the selected range and `defaultValue[1]` is the end (incorrectly ordered values are automatically swapped). Use if the component should control its own state. Either `value` or `defaultValue` is required.
formatValue|`(value) => <string>`|`(v) => v`|Formats the value to display above the min, max, and selected values.
onChange|`([leftValue, rightValue]) => {}`||Fired when the value changes after the user stops dragging.

## Design

At a high-level, this is how it works:

On mount we render a blank track in order to measure its width and calculate the segment markers. Once these measurements are taken we immediately re-render to actually display the component. We re-measure the segment markers if `props.values` changes.

The user can drag three parts of the thumb: left (start of selected range), right (end of selected range), and mid (shift both left and right equal amounts). The drag events are captured using `onPan*` HammerSensor callbacks. (Note: mid is hidden if `isDragRangeEnabled` is `false`.)

While dragging, the thumb’s `left` and `width` styles are updated and the distance dragged is checked against the marker positions to determine the new value.

## Known Issues

- Does not recalculate markers on window resize
- Does not handle single values (can be ‘faked’ by setting leftValue = rightValue)
