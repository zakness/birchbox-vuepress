# Copy

[`Copy`](/src/components/Copy/index.js) is a [Markdown](/docs/components/Markdown.md) component that can have a particular font color and size applied. One use case for Copy is for CMS components that provide Markdown fields with customizable font size and color.

## props

### className
```
PropTypes.string
```
Passed through to the Markdown component.

### color
```
PropTypes.string
```
The text color. Can be a color name (`colorTurquoise`), theme color name (`majorColorDark`), or hex code (`#41b1c0`).

### content
```
PropTypes.string
```
Markdown content passed through to the Markdown component.

### copySize
```
PropTypes.string
```
Sets the type style (font family and size). Must be one of the styled-component utilities exported from [styleds/copySizes](/src/styleds/copySizes.js).
