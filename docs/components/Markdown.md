# Markdown

[`Markdown`](/src/components/Markdown/index.js) is a component for rendering a string as Markdown + HTML. It uses [showdown](https://github.com/showdownjs/showdown) and [react-jsx-parser](https://github.com/TroyAlford/react-jsx-parser).

## Props

Prop|Type|Description|Default
----|----|----|----
className|string|className applied to wrapper element.|
content|string|String (containing HTML and/or markdown) to be parsed.|
onJsxValidated|({ isValid:bool, jsxError:string }) => ?|Called when JSX is validated. Empty `content` is valid by default.|
options|object|Additional options to pass to showdown|
style|object|Style object applied to wrapper element.|
tag|oneOf(div, p, span)|Wrapper element to use if parsed HTML would have been a single `<p>`. This allows us to avoid unwanted vertical margins and to default to an inline display without using style props.|div

## Magento-style PDP URLs

Markdown content can contain links to PDPs using a special syntax first used by Magento:

```
[This product](product:123)
↓
<a href="/product/123">This product</a>
```

## Embedded Components

Markdown currently supports two embedded React components (but more can easily be added). These components can be embedded in markdown content via special `{component}` syntax.

### [Highlight](/docs/components/Highlight.md)

Usage:

```
You can {highlight type=squiggle color=blue}highlight some text{/highlight}.
```

Prop|Type|Description|Default
----|----|----|----
color|string|Highlight color, must be a valid `color` from variables.css|Highlight component default prop
type|string|Highlight type, must be a valid `type` from Highlight types|Highlight component default prop

NB: `color` values should not include the prefix 'color', i.e. `blue` not `colorBlue`

### [ImageSwiper](/src/components/ImageSwiper/index.js)

Usage:

```
{imageswiper imageRight=/image/path/foo.jpg imageLeft=/image/path/bar.jpg startPosition=0.6}{/imageswiper}
```

Prop|Type|Description|Default
----|----|----|----
imageLeft|string|Path to image on the left side of the swiper|
imageRight|string|Path to image on the right side of the swiper|
startPosition|number|Initial position of the swiper bar|0.5

## Render Fallback

If `content` cannot be successfully parsed as JSX, we fall back to using `dangerouslySetInnerHTML`.
