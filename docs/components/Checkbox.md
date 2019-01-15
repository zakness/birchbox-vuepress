# Checkbox

[`Checkbox`](/src/components/Form2Beta/Checkbox/index.js) is a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) checkbox component for capturing a boolean value.

Designed to be used with [`Form2Beta`](/docs/components/Form.md).

## Props

Prop|Type|Description|Default
---|---|---|---
disabled|bool|Disabled?|`false`
children|({ toggle:func }) => node|If passed a function, `children` will be passed a `toggle` method. This allows a completely custom label component to be used (rendered to the right of the checkbox icon). If no children are set, `label` is rendered next to the checkbox icon.|
fullWidth|bool|Should the clickable area fill its parent’s width?|`true`
isInvalid|bool|Render with invalid styling?|`false`
label|string|User-facing field label.|
name|string|Identifying data key.|
onChange|({ [name]: value }) => ?|Passes up changes to field data.|
value|bool|Checked?|`false`

Where possible, props are typically passed down from a parent `Form`.
