# Body Scroll

When a modal is visible, we do not want scroll or wheel events to propagate to the body element. The 'correct' way to do this is to call Event.stopPropagation() on the wheel event, but I could not get that to work. This might be because React's Event model attaches scroll/wheel events to the document and then trickles them down, which means stopPropagation doesn't make much sense, and you can only prevent all scrolling, which would break many Sheet modals.

## Best Solution

The *overflow: hidden* CSS on the body is perfect, except...

## Safari Mobile Has a bug that they don't want to fix:

https://bugs.webkit.org/show_bug.cgi?id=153852

Chrome mobile team fixed this bug a while ago: https://bugs.chromium.org/p/chromium/issues/detail?id=175502

The W3C has clarified that the standard behavior is correct: http://www.w3.org/TR/CSS21/visufx.html#overflow

So hopefully Apple will fix this eventually.

The overflow fix also has the downside of removing the body scrollbar, thus changing the width  of the content area. But this isn't an issue on mobile or most OS X windows, where scroll bars are  layered on top of the body, rather than next to it. See http://stackoverflow.com/a/18037511/26836.

## Previous Solutions

A previous solution recorded `body.scrollTop` when the modal opened and then smoothly maintained that scrollTop until the modal was closed. This solution was abandoned because it caused unexpected behavior when the browser triggered a scroll event when showing the software keyboard.

## Current Solution

The current solution works around Safari’s bug by adding `height: 100%`. This forces the viewport to the top every time a modal is opened, which sucks. We mitigate this by saving `body.scrollTop` before the modal opens and reapplying it after the modal closes.

### `delay` argument

Since the `height: 100%` rule effectively scrolls the page to the top, we might want to delay the execution a bit. For example, the NarrowNav animates in and covers the screen, so if we wait for that animation to complete before disabling scrolling, users will never see the page jump to the top.

## Future Possibilities!!!!

At some point it might be nice to create a single ModalScroll component/element that would be responsible for all scrolling within a Modal and then apply the following method to prevent body scrolling: On scroll with a modal open, you check the scrollTop of that single element and the direction of the scroll, and if you're going beyond <= 0 || >= scrollHeight, you preventDefault().

https://github.com/Laiff/react-scroll-lock/blob/master/src/ScrollLock.js#L61
