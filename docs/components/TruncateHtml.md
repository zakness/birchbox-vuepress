# TruncateHtml

[`TruncateHtml`](/src/components/TruncateHtml/index.js) ensures content is limited to a specified number of lines of text or pixel height when rendered. Content must be plain text or HTML string.

Truncation is done by converting the content to a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) and trimming nodes, so while HTML tags *are* preserved, more complex HTML might produce unexpected results.

If truncated, `…` is appended to the end of the content. If truncation cannot be completed successfully, the original content is rendered unchanged.

Prop|Type|Description|Default
---|---|---|---
after|HTML string|HTML content that will be rendered un-truncated after the main content.|
before|HTML string|HTML content that will be rendered un-truncated before the main content.|
className|string|Passed through.|
content|HTML string|HTML content that may be truncated.|
maxHeight|number (px)|Truncate the content until the element is this height or shorter. Takes precedence over `maxLines`.|
maxLines|number|Truncate the content to this many lines of text.|`1`
preserveWords|bool|If `true`, truncates at whitespace. If `false`, truncates one character at a time.|`false`

## Example

```jsx
<div style={{ width: 100 }}>
  <TruncateHtml
    before='Results for ‘'
    after='’'
    content='Beauty Protector Beauty Cream Body Lotion'
    maxLines={2}  
  />
</div>

.---------------------.
| Results for ‘Beauty |
| Protector Beauty…’  |
'---------------------'
```
