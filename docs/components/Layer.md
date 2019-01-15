# Layer

[`Layer`](/src/components/Layer/index.js) is for content that needs to appear above the main content. It’s similar to z-index, but a lot less messy. Instead of an arbitrary number of layers, and requiring setting z-index on parent elements, `Layer` currently has only two levels of “above-ness”, and doesn’t require changes to parent elements at all.

Wrap your component/element in a `Layer`, and it will be attached to the root element (i.e., the element with `id="root"`), or, optionally, the body element\*. Most importantly, the Layer will continue to behave as if it is rendered where it is called (render and update children properly, etc.).

Layers on a given parent (e.g., `root`) are layered in the order they are called, with later Layers displaying above earlier Layers. Layers on `body` always appear above Layers on `root`.

\* *Technically a Layer can be attached to any element with an ID, but for now it's probably better to stick with just 'root' or 'body' for simplicity.*


## Props

Prop|Type|Description|Default
---|---|---|---
parent|string|Either 'body' to attach to the body, or the ID of an element to attach to|'root'

All other props are passed through to the div that wraps Layer’s children, to allow positioning, etc.
