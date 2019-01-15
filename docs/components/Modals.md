# Modals

A modal is a type of component that covers the entire screen and thus blocks interaction with the elements beneath it until it is dismissed.

There are two modal designs: `dialog` and `sheet`. Dialogs are small-ish rectangles that pop into the center of the screen. Sheets slide in from the bottom and take up the entire screen.

## Showing and hiding modals

In order to simplify the logic for displaying multiple modals and ensuring they cover the whole screen, modal components are attached to a singleton `ModalStack` component rendered as the last child of the main `App` component. `ModalStack` is so named because as only the most recently attached modal can be interacted with (and eventually dismissed), the data structure representing the modals resembles a stack. To show a modal, you ‘push’ it onto the stack. To hide it, you ‘pop’ the stack. This is done via the `pushModal` and `popModal` redux actions.

### `pushModal(type:string, content:node[, props:object])`

Pushes a modal onto the stack (shows the modal)

- `type` — One of `sheet` or `dialog`.
- `content` — The component to display in the main area of the modal, or a function that returns that component. If a function, it is passed an object with the `popModal` function as the only argument (see example below).
- `props` — Props to pass to the internal `Dialog` or `Sheet` component.
  - `onClose:func` — Fired after the dismissal animation completes.
  - `headerLabel:string` — The modal header. Only applicable to `Dialog`.

### `popModal()`

Pops the front-most modal off the stack.

### Example

```jsx
import { pushModal, popModal } from 'actions/modalStack'

let MyDialogContent = (props) =>
  <div>
    <div>You look nice today.</div>
    <Clickable onClick={props.popModal}>Thanks!</Clickable>
  </div>

MyDialogContent.mapDispatchToProps = { popModal }
MyDialogContent = connect(MyDialogContent)

let MyComp = (props) => {
  const showModal = () => props.pushModal('dialog', <MyDialogContent />, { headerLabel: 'Hey there!' })
  return <Clickable onClick={showModal}>Hello</Clickable>
}

MyComp.mapDispatchToProps = { pushModal }
MyComp = connect(MyComp)
```

If you’d like to avoid `connect`ing the modal component just for `popModal`, you can pass a function that returns the component instead:

```jsx
import { pushModal } from 'actions/modalStack'

const getMyDialogContent = ({ popModal }) => (props) =>
  <div>
    <div>You look nice today.</div>
    <Clickable onClick={popModal}>Thanks!</Clickable>
  </div>

let MyComp = (props) => {
  const showModal = () => props.pushModal('dialog', getMyDialogContent, { headerLabel: 'Hey there!' })
  return <Clickable onClick={showModal}>Hello</Clickable>
}

MyComp.mapDispatchToProps = { pushModal }
MyComp = connect(MyComp)
```

Note that in the code above we don’t have to import `popModal`. It is passed to the `getMyDialogContent` function by the `Dialog` (and `Sheet`) component.


## Modals and location

Modals are automatically flushed when the location `pathname` changes.
