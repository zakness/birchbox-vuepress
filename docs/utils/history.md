[← Routing docs](/docs/guides/routing)

# `history`

[`history`](/src/components/Routing/history.js) is the singleton instance of the [`history` object](https://reacttraining.com/react-router/web/api/history) passed to [`Router`](/src/components/Routing/Router/index.js). Its main purpose is to allow calls to `history.push()`, `history.replace()`, and other methods without needing to use React Router’s [`withRouter` HoC](https://reacttraining.com/react-router/web/api/withRouter) ([source](https://github.com/ReactTraining/react-router/issues/5237#issuecomment-308245424)).

## Example

```jsx
import history from 'components/Routing/history'

const MyLink = ({ href, content }) =>
  <div onClick={() => history.push(href)}>
    {content}
  </div>
```
