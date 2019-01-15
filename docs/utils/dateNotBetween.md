# dateNotBetween

[`dateNotBetween`](/src/utils/dateNotBetween.js) returns whether or not the current moment falls outside of a specified datetime range.

## Arguments

Argument|Type|Description|Default
---|---|---|---
from|string|Format is `YYYY-MM-DD` or `YYYY-MM-DD H:mm AM/PM`|
until|string|Format is `YYYY-MM-DD` or `YYYY-MM-DD H:mm AM/PM`|
timezone|string|See [here](https://momentjs.com/timezone/) for valid time zones|LOCALE.adminTimezone

If `until` only specifies a date (without time), it is inclusive: the current moment must be on or after midnight on the _following_ day in order to be considered outside the range.
