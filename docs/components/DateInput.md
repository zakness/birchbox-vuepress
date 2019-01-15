# DateInput

[`DateInput`](/src/components/Form/DateInput/index.js) normalizes the date output value as YYYY-MM-DD, as long as the input's value is YYYY-MM-DD, #/#/YY, or ##/##/YYYY (whether ##/##/YYYY is MM/DD or DD/MM is determined by the dictionary DATE_FORMAT entry, by default MM/DD/YYYY).

Ideally the component would also normalize the date display for browsers other than Chrome to match the DATE_FORMAT entry, but since Chrome requires the value be specified as YYYY-MM-DD, that's not possible without browser sniffing (though if you can make it work feel free!).

# Browser Support

Unfortunately, browser support for `<input type='date' />` is poor.

- Chrome is great: shows date picker, takes/reports value in YYYY-MM-DD, displays the date according to localization rules.
- Safari iOS is good: shows date spinners, reports value in YYYY-MM-DD and displays the date as mmm d, YYYY.
- Firefox and Safari desktop treat the input as a text field. Since we require the date output to be in YYYY-MM-DD, that means the other browsers will display dates as YYYY-MM-DD.

This component reproduces the way Chrome handles changes to the date value: onChange is only called when the value is a valid date format that includes month, day, and year. This prevents issues with trying to interpret, for example, "1", which is interpreted by moment.js as 00-00-0001, or "11/12", which might mean November 12th or November of 2012, etc.

This component also hides Chrome's pseudo-placeholder text.

Lastly, the component attempts to allow free text editing where the browser UI supports it. For example, it's really annoying as a user if I've entered "01/12/2016", and I want to change the value to "02/12/2016", but the field won't allow it because trying to delete the "1" and replace it with "2" would cause an invalid date of "0/12/2016".

# PropTypes

Prop|Type|Description|Default
---|---|---|---
value|string in format 'YYYY-MM-DD'|
onChange|function|The onChange fn is only called if the field's value is a valid date.|
min|string|The min value ensures that an error is thrown if a date is inputed that is before this date.
max|string|The max value ensures that an error is thrown if a date is inputed that is after this date.
other props||All other props are passed through to the wrapped TextInput.|

While the props are expressed on the TextInput itself, the `<input type='date' />` takes `min` and/or `max` properties that will gray out dates before and after the specified dates in the dropdown (for browsers that have it). On desktop users can still type in any values they want, but an error message will display if these values are set and the field should reset itself now.
