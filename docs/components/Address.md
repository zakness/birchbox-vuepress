# Address

[`Address`](/src/components/Addresses/Address/index.js) is a component for displaying an address with standard formatting.

Not sure this is the right component for your use case? See [other address-related components](/docs/guides/addresses.md).

## Props

Prop|Type|Description|Default
---|---|---|---
address|address object|The address object.|
className|string|Passed through to container div.|
maxLines|number|Limit the number of lines the address is rendered with. See examples below.|

## Address shape

```jsx
{
  city: 'New York',
  company: 'Birchbox',
  country: 'US',
  firstName: 'Zach',
  lastName: 'Lindner',
  postCode: '10017',
  state: 'New York',
  streetAddress1: '115 Lexington Ave',
  streetAddress2: 'Apt 3',
  telephone: '999999999',
}
```

## `maxLines` examples

`maxLines: 1`

```
firstName lastName, company, streetAddress1 streetAddress2, city, state postCode, country, Tel. 999999999
```

`maxLines: 2`

```
firstName lastName, company, streetAddress1 streetAddress2
city, state postCode, country, Tel. 999999999
```

`maxLines: default (undefined)`

```
firstName lastName
company
streetAddress1 streetAddress2
city, state postCode
country
Tel. 999999999
```
