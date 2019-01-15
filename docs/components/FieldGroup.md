# FieldGroup

[`FieldGroup`](/src/components/Form/FieldGroup/index.js) is a simple wrapper for dividing a Form into parts that each offer hooks for edit mode, validation, save, next, and cancel.

## Props

Prop|Type|Description|Default
---|---|---|---
cancelButtonProps|object|| {}
&nbsp;&nbsp;className|string|Cancel button class name
&nbsp;&nbsp;onClick|function|Cancel button click handler
isEdit|boolean|Optional. Use edit mode (i.e., show Cancel button, only allow save when `props.isEdited`)
isEdited|boolean|Optional. During edit mode, enable the Save button.
nextButtonProps|object|| {}
&nbsp;&nbsp;className|string|Cancel button class name
&nbsp;&nbsp;label|String|Cancel button label
&nbsp;&nbsp;onClick|function|Next button click handler
onSave|function|Field Group Save Handler
validator|function|Optional. Field Group validation handler with callback

## Example

```jsx
const fieldGroupProps = {
  isEdit: this.state.isEditMode,
  isEdited: this.state.changesMade,
  onSave: this.saveData,
  cancelButtonProps: {
    className: buttonStyles.dark,
    onClick: this.handleCancel,
  },
  validator: this.state.needsValidation ? this.validateSection : undefined,
  nextButtonProps: {
    label: this.state.isEditMode ? 'Save' : 'Next',
    className: buttonStyles.default,
    onClick: this.changeSection,
  },
}

<Form>
  <FieldGroup {...fieldGroupProps}>
    <Input type='text' label='name' />
    <Input type='email' label='email' />
  </FieldGroup>
</Form>
```
