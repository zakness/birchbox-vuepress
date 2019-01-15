# SegmentedControl

[`SegmentedControl`](/src/components/SegmentedControl/index.js) is a horizontal tab-like layout of a small set of items. One item can be selected at a time.

## Props

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through.|
defaultSelectedKey|string|Initially selected item key.|
items|arrayOf(Item)|See Item shape below.|`[]`
selectedKey|string|Selected item key.|
theme|oneOf(gray, barVertical, underbar, topBarVertical)|Active and inactive item styles|gray
height|number|Control height (px)|48
sizing|oneOf(equalized, content)| Distribution of extra space |equalized

## Item shape

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through. Only necessary if you need to override or add to the theme style.|
key|string|Required to determine selected state.|
label|string|Label to display.|
to|string\|object|If defined, renders item as `Link` with this `to` prop.|
onClick|func|If defined and `to` is undefined, renders item as `Clickable` with this `onClick` prop. If both this and `to` are defined, this is passed to the `Link`.|
