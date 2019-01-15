# Validators

[`Validators`](/src/utils/validators/index.js) are used to validate field data in [`Form`s](/docs/components/Form.md). You add them to each field that needs them in the `fieldDefinitions` array that is passed to `Form`.

## Shape

Prop|Type|Description
---|---|---
fieldProps|object|Any props that should be applied to the field. Most commonly HTML5 validation props like `maxLength`|
validate|(value) => bool|Returns whether or not the value is valid.
message|(label, value) => string|Returns error message if invalid. It gets the value as a second param, this is useful to show different messages based on value.
