# ColorPicker

[`ColorPicker`](/src/components/Form2Beta/ColorPicker/index.js) is a form control (designed to be used with [`Form2Beta`](/docs/components/Form.md)) that lets the user pick a color from a list of standard color names or enter a custom hex code.

The list of standard color names is currently limited to [theme variable names and neutrals](/src/utils/colorNames.js). If the user picks one of these, the name itself (i.e. `majorColorDark`) is the `value`, not the actual hex code that it will eventually resolve to when rendered on screen. This is necessary for themes to work as well as giving us the flexibility to change color values in future refactors.

**Note:** ColorPicker does not currently support the `isOptional` prop found on other Form controls — it is always optional (can have an empty value). Feel free to implement this if you need it!

## Props

Where possible, props are typically passed down from a parent `Form`.

### buttonGroup
```
PropTypes.object
```
Defines if the container div’s left or right borders should collapse. Typically set indirectly by a wrapping [`ButtonGroup`](/docs/components/ButtonGroup.md).

### disabled
```
PropTypes.bool
```
If `true`, `ColorPicker` value cannot be changed by the user.

Default: `false`

### isInvalid
```
PropTypes.bool
```
If `true`, `ColorPicker` is rendered with invalid styling.

Default: `false`

### label
```
PropTypes.string
```
A user-facing label for this field.

### name
```
PropTypes.string
```
The unique key used to identify this field in Form data.

### onChange
```
PropTypes.func
```
`({ [name]: value }) => ?`

Fired when the user picks a color. Typically used to pass data up to the parent Form.

### showOptionalLabel
```
PropTypes.bool
```
If `true`, “ (optional)” is appended to the `label` display.

Default: `true`

### value
```
PropTypes.string
```
The current color value. Can be a named variable (`majorColorDark`) or hex code (`#f52e86`).
