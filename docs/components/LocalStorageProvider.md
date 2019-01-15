# LocalStorageProvider

[`LocalStorageProvider`](/src/components/LocalStorageProvider/index.js) fetches and de-serializes JSON strings from `localStorage` and provides this data to the function-as-child component that it wraps.

Additionally, the component passes a convenience function for serializing data back to `localStorage` for the given key.

The intended usage is for persisting data related specifically to the browser session, for example:

- saving Page and Block favorites for employee-users of the Bernard CMS
- saving onboarding flow profile response data for unauthenticated users

## Props

Prop|Type|Description|Default
----|----|----|----
children| function | Required |
storageKey| string |Required. The lookup key to fetch in `localStorage`. |
defaultData| object or array | Value to use if no data are found at `storageKey` | `{}` |

## Usage

This component is intended as a function-as-child-component wrapper.

The first parameter passed to the function-as-child component is the parsed data.

The second argument passed to the function-as-child component is a convenience setter function, whose sole argument is the updated data.

### Example

```
  <LocalStorageProvider storageKey='my-key' defaultData={{ value: 'foobar' }}>
    {( myData, setLocalStorage ) => // your component code }
  </LocalStorageProvider>
```
