# TransitionContainer

[`TransitionContainer`](/src/components/TransitionContainer/index.js) is a component which makes it easy to animate view changes. Just specify the content to be shown and the type of  transition to use.

The `TransitionContainer` is a fixed height component, content that exceeds the height of the container viewport will scroll accordingly. The height can be set as prop, or the `TransitionContainer` can be wrapped in an element with a defined height.

## Transitions

Name|Description|AKA
---|---|---
left|New content moves to the left from off the right side of the viewport|Horizontal Forward
right|New content moves to the right from off the left side of the viewport|Horizontal Backward
up|New content moves up from off the bottom of the viewport|Vertical Forward
down|New content moves down from off the top of the viewport|Vertical Backward
opacity|Old content fades out, new content fades in|Fade
none|Instantly displays new content without transition|

## Usage

```jsx
<TransitionContainer transition='left'>
  <TransitionContent transitionKey={'uniqueValueForCurrentContent'}>
    {this.state.currentContent}
  </TransitionContent>
</TransitionContainer>
```

*See examples below for more.*

## Props

Prop|Type|Description|Default
---|---|---|---|---
children|`<node>` or [`<node>`]|The elements that should currently appear within the TransitionContainer, each with a unique prop `transitionKey`.|
transition|One of ['left', 'right', 'up', 'down', 'opacity', 'none']|Direction in which the new content should move, or `opacity` for fade transition|left
height|string or number|CSS attribute that defines the height of the container|'100%'
width|string or number|CSS attribute that defines the width of the container|'100%'
scrollResetTrigger|number|A value used to trigger a reset of the content scroll position|

## Examples

This example illustrates using local state to track whether we are moving forward or backward. Calling the `showQuestion` method with forward set to false will cause the transition to appear backward (i.e., the content will move to the right, from off the left side of the screen).

Note: In the code below, getAnswersContent() changes when state.currentQuestionId changes. Each element returned has a unique `transitionKey` prop.

```jsx
showQuestion (questionId, forward = true) {
  this.setState({
    transitionBackwards: !forward,
    currentQuestionId: questionId,
  })
}

<TransitionContainer transition={this.state.transitionBackwards ? 'right' : 'left'}>
 {this.getAnswersContent(this.state.currentQuestionId)}
</TransitionContainer>
```

*See '/me/profile/women' for live example with multiple transitions at once.*

## TransitionContent

`TransitionContent` is a thin wrapper that can be used with `TransitionContainer` where the inner content is not a React component.

## Resetting scroll position

`TransitionContainer` will scroll its content to the top whenever a transition takes place. Additionally, a scroll reset can be “manually” triggered via the scrollResetTrigger prop. If you set a truthy value for this prop that is not equal to the previously set value, `TransitionContainer` will reset the scroll position on the next render. A good choice for values would be a timestamp, e.g. `_.now()`.

## TransitionMotion

`TransitionContainer` is a wrapper around `react-motion`'s `TransitionMotion` component. I find it useful to think of `TransitionMotion` as accomplishing two main tasks:

1. Tracking children, even for a short time after those children have been removed (until the transition has completed), and
1. Providing instaneous values throughout the transition, given starting and ending values.
