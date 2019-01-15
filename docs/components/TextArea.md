# TextArea

[`TextArea`](/src/components/Form2Beta/TextArea/index.js) is a [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) `<textarea>` component.

Designed to be used with [`Form2Beta`](/docs/components/Form.md).

## Props

Prop|Type|Description|Default
---|---|---|---
disabled|bool|Disabled?|`false`
labelIcon|string|User-Facing icon in placeholder|
isInvalid|bool|Render with invalid styling?|`false`
isOptional|bool|Can have an empty value upon submission? If `true`, “ (optional)” is appended to the label display.|`false`
label|string|User-facing field label.|
maxLength|number|Prevent user from entering more than this many characters.|
rows|number|Rows of the Textarea.|
name|string|Identifying data key.|
onChange|({ [name]: value }) => ?|Passes up changes to field data.|
onFocus|() => ?|Called when the field is focused.|
value|string|Current value.|

Where possible, props are typically passed down from a parent `Form`.
