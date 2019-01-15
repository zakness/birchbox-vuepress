[← Event Logging docs](/guides/event-logging)

# Event: `search`

The `search` event is logged when the user performs a site-wide search either by entering a query into the search field or by clicking on one of the popular search terms below it.

## Event data

Prop|Type|Description|Default
---|---|---|---
mod|string|The module of the site from which this event originated.|`'navbar'`
searchTerm|string|The search term.|
trigger|string|What triggered the search? `'search-field'` or `'popular-term'`|
