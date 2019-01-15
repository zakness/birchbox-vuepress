# Adapter

The [`Adapter`](/src/enhancers/Adapter/index.js) module exports the `adapt()` component enhancer which automatically chooses props and styles for the current breakpoint from a set of breakpoint value definitions.

If you’re itching to see `adapt()` in action, check out the [Usage Tutorial](#usage-tutorial-adaptivewrapper) at the end of this document.

## Concepts: Breakpoints and Breakpoint Value Definitions

In Bernard we switch between two layouts using a single viewport width [breakpoint](https://responsivedesign.is/strategy/page-layout/defining-breakpoints). Devices >= 768px wide are considered `wide`, smaller than that are `narrow`. Though it is currently possible to use a single boolean value to represent the active breakpoint, the system is designed to accommodate an arbitrary number of breakpoints.

A breakpoint value definition (BVD) is an object or string that describes what a given value should be at one or more breakpoints. For example, if I want to show three items in the `wide` breakpoint and only one item in `narrow`, the BVD would be `{ wide: 3, narrow: 1 }`.

#### BVD prop conversion logic

Description|Example|`wide` value|`narrow` value
---|---|---|---
All breakpoints defined|`{ wide: 3, narrow: 1 }`|`3`|`1`
Incomplete|`{ wide: 3 }`|`3`|`undefined`
Incomplete in `defaultProps`|`{ wide: 3 }`|`3`|`null`
Boolean shorthand (wide)|`'wideOnly'`|`true`|`false`
Boolean shorthand (narrow)|`'narrowOnly'`|`false`|`true`
Unrecognized keys cause value to not be converted|`{ wide: 3, foo: 'bar' }`|`{ wide: 3, foo: 'bar' }`|`{ wide: 3, foo: 'bar' }`
Other values not converted|`'derp'`|`'derp'`|`'derp'`

#### Blacklisted prop names

There are certain props that we know are not adaptable. These include things like `children` and `key`. These props are never converted. See the [Adapter source code](/src/enhancers/Adapter/index.js) for the full list.

## API: `adapt(component[, styles])`

The `adapt` method transforms props passed to the composed component and converts any BVDs to their proper value (see table above for conversion logic). It also optionally accepts a second `styles` argument which takes a CSS Module and injects a massaged `styles` prop.

> NB: `adapt` is provided globally (you do not have to import it)

```css
/* Foo/foo.css */

.fooNarrow {
  color: blue;
}

.fooWide {
  color: red;
}
```

```jsx
// Foo/index.js

import styles from 'Foo/foo.css'

const Foo = (props) => <div className={props.styles.foo}>
  {_.times(props.count, (num) => <div>And a {num + 1}...</div>)}
</div>

Foo.propTypes = {
  count: PropTypes.number,
}

export default adapt(Foo, styles)
```

```jsx
// View/index.js

import Foo from 'Foo'

const View = (props) =>
  <Foo count={{ narrow: 1, wide: 3 }} />

// narrow layout:
<div class="foo__fooNarrow___2k34j">
  <div>And a 1...</div>
</div>

// wide layout:
<div class="foo__fooWide___sdf89">
  <div>And a 1...</div>
  <div>And a 2...</div>
  <div>And a 3...</div>
</div>
```

### Breakpoint props

The `adapt` method also injects breakpoint props in case the composed component wants to query the breakpoint directly. The props include the actual breakpoint and convenient boolean flags:

Prop|Type|Description
---|---|---
breakpoint|string|The breakpoint value (e.g. 'narrow')
breakpointUpper|string|Uppercased breakpoint value (e.g. 'Narrow'). Useful for composing camel case strings
isBreakpointWide|boolean|breakpoint === 'wide'
isBreakpointNarrow|boolean|breakpoint === 'narrow'

See the [Usage Tutorial](#usage-tutorial-adaptivewrapper) below for a more in-depth example of using `adapt`.

### Adapting styles

The CSS Module `composes` feature does not work inside media queries, so we must turn to JavaScript to make style switching happen automatically when the active breakpoint changes. That typically looks like this:


```jsx
// CSS file

.foo { ... }
.fooNarrow { composes: foo; ... }
.fooWide { composes: foo; ... }
.bar { ... }

// CSS Module object

{
  foo: 'foo__foo___asj5h',
  fooNarrow: 'foo__foo___asj5h foo__fooNarrow___2k34j',
  fooWide: 'foo__foo___asj5h foo__fooWide___sdf89',
  bar: 'foo__bar___asd90',
}

// Usage in component

import styles from 'Foo/foo.css'

const Foo = (props) =>
  <div className={styles.bar}>
    <div className={styles[`foo${props.breakpointUpper}`]}/>Foo!</div>
  </div>

export default adapt(Foo)
```

To make that a little nicer, you can pass `styles` to `adapt()` and use the injected `styles` prop:

```jsx
import styles from 'Foo/foo.css'

const Foo = (props) =>
  <div className={props.styles.bar}>
    <div className={props.styles.foo}/>Foo!</div>
  </div>

export default adapt(Foo, styles)
```

`adapt()` will find all class names that end with a capitalized breakpoint name and only keep the ones for the current breakpoint, trimming off the breakpoint name. For example, the CSS Module object in the code above will look like this when adapted in the `narrow` breakpoint:

```jsx
{
  foo: 'foo__foo___asj5h foo__fooNarrow___2k34j', // used to be fooNarrow
  bar: 'foo__bar___asd90',
}
```

You can also pass a BVD styles object if it makes more sense to have breakpoint-specific styles in separate modules:

```jsx
import sharedStyles from 'Foo/foo.css'
import narrow from 'Foo/narrow.css'
import wide from 'Foo/wide.css'

const Foo = (props) =>
  <div className={sharedStyles.bar}>
    <div className={props.styles.foo}/>Foo!</div>
  </div>

export default adapt(Foo, { narrow, wide })
```

Note that in this case it is assumed both CSS modules export the same class names. `adapt()` will not transform them at all.

### Usage with `defaultProps`

One handy feature of `adapt()` is that it works with `defaultProps` too:

```jsx
Foo.defaultProps = {
  itemCount: { wide: 3, narrow: 1 },
  gutter: 'wideOnly',
}
```

However, since this feature hijacks React behavior, there are several ‘gotchas’ to keep in mind:

#### Gotcha 1: using with `connect()`

You want to `adapt` your Component first, then `connect` it:

```
export default connect(adapt(MyComponent))
```

If these calls are nested the other way around, `connect` will hide the original Component's `defaultProps` from `adapt`, and any BVD therein will remain unparsed.

#### Gotcha 2: Incomplete BVDs

If you specify an [incomplete BVD](#bvd-conversion-logic), the adapted value for an undefined breakpoint will be `null`, *not* `undefined`. For the most part this should not be an issue as long as you are not checking for `undefined` explicitly. If you are, consider using `!value` or `value != null` instead. See the [Adapter source code](/src/enhancers/Adapter/index.js) for the reasoning behind this.

This is an issue when props are passed down through multiple parent-child components and you expect to use a `defaultProp` of the child component. Consider the following example:

```jsx
const Foo = (props) => <div>{props.a}</div>
Foo.defaultProps = { a: { wide: 3, narrow: 2 } }

const Bar = (props) => <Foo a={props.a} />
Bar.defaultProps = { a: { wide: 1 } }

<Bar />
// in wide: <div>1</div>
// in narrow: <div>null</div>
```

One might expect the narrow output to be `<div>2</div>`, but it ain’t. Unfortunately there is no good workaround for this at this time.

## Usage Tutorial: AdaptiveWrapper

This short tutorial walks you through building an adaptive component with `adapt`. Our use case is a wrapper component that inserts horizontal spacing around its children so that views don’t get stretched too wide on wider devices.

To start let’s say we want our View to have standard gutters on wide devices and go all the way to the edge on narrow ones. Since this is a simple boolean, we can use the [boolean shorthand](#bvd-conversion-logic).

```jsx
import styles from 'wrapper.css'

const Wrapper = (props) =>
  <div className={props.gutter ? styles.gutterWide : ''}>
    {props.children}
  </div>

// The Wrapper uses a simple boolean `gutter` prop
Wrapper.propTypes = {
  gutter: PropTypes.bool,
}

// Make Wrapper accept BVDs as props
const AdaptiveWrapper = adapt(Wrapper)

const View = (props) =>
  // Now we can pass a BVD for `gutter`
  // Note that this is equivalent to `gutter={{ wide: true, narrow: false }}`
  <AdaptiveWrapper gutter='wideOnly'>
    ...
  </AdaptiveWrapper>
```

That works great, but it turns out sometimes we want gutters in narrow layouts too. Additionally, the gutters might be different widths at different breakpoints. This can be done by specifying a [BVD object](#bvd-conversion-logic).

```jsx
import styles from 'wrapper.css'

const Wrapper = (props) =>
  <div className={styles[props.gutterClassName]}>
    {props.children}
  </div>

Wrapper.propTypes = {
  gutterClassName: PropTypes.string,
}

Wrapper.defaultProps = {
  gutterClassName: 'gutterMedium',
}

const AdaptiveWrapper = adapt(Wrapper)

const View = (props) => <div>
  {/* wide gets large gutters, narrow gets small gutters */}
  <AdaptiveWrapper gutterClassName={{ wide: 'gutterLarge', narrow: 'gutterSmall' }}>
    ...
  </AdaptiveWrapper>
  {/* wide gets large gutters, narrow gets default medium gutters */}
  <AdaptiveWrapper gutterClassName={{ wide: 'gutterLarge' }}>
    ...
  </AdaptiveWrapper>
  {/* both layouts get huge gutters */}
  <AdaptiveWrapper gutterClassName='gutterHuge'>
    ...
  </AdaptiveWrapper>
</div>
```

We’re almost there, just one last improvement: It turns out a single default gutter doesn’t make the most sense. It would be best if the default gutters were adaptive too. The good news is that this Just Works™:

```jsx
Wrapper.defaultProps = {
  gutterClassName: { wide: 'gutterLarge', narrow: 'gutterSmall' },
}
```
