# Sidebar

[`Sidebar`](/src/components/Sidebar/index.js) lets you set up a layout that includes a sidebar (on desktop only), and then specify the content to fill that sidebar later. For example, in the Gift Purchase flow on desktop, there is an omnipresent sidebar, but each step specifies it's own content for the sidebar. Rather than having to duplicate the step logic in two places, sidebar keeps your content where it belongs.

## Components

- `SidebarContainer` is the layout component, used higher up in the DOM hierarchy.
- `SidebarContent` is the content component, included in the code wherever your content logic already exists, but "hoisted" in the output into the sidebar spot created by `SidebarContainer`. Including multiple SidebarContent components within a single SidebarContainer component will render the SidebarContent components in the order they were called (within the SidebarContainer).

## Props

### SidebarContainer

Prop|Type|Description|Default
---|---|---|---
width|number|The width of the sidebar container|330

### SidebarContent

Prop|Type|Description|Default
---|---|---|---
className|string|The className to apply. Makes it easy to use SidebarContent as a drop-in replacement on Desktop for a `<div />` on Mobile |
