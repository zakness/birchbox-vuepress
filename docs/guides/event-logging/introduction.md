[← Event Logging docs](/guides/event-logging)

# Intro to Event Logging

Event logging is the mechanism we use to capture events that occur on the website and send them to external data collection services in order to understand our users’ behavior and the performance of the website as a whole.

Event logging is built upon a single [`log`](/utils/log.md) utility function.

## Where event data is sent

When `log` is called with event data, it sends that data to two services: our internal Event API (`event.api.birchbox.com`) and [Google Tag Manager](https://tagmanager.google.com) (GTM).

Event data collected by Event API is made visible to Birchbox employees via [Looker](https://birchbox.looker.com), and helps us make business decisions.

Data collected by GTM is then available to third party tags and helps us, among other things, attribute sales to marketing partners. Learn more about [working with GTM](https://birchbox.atlassian.net/wiki/spaces/TECH/pages/949452902/Working+with+Google+Tag+Manager) on the wiki.

## What event data is sent

The data sent when `log` is called is a combination of [default data](/guides/event-logging/default-data.md) pulled from sessionStorage, localStorage, Redux, and the browser itself, along with the data passed to `log` directly.

Detailed information about all events can be found in the [`events`](/guides/event-logging/events) directory. The events that get the most attention from business stakeholders are [`place-order`](/guides/event-logging/events/place-order.md), [`page-view`](/guides/event-logging/events/page-view.md), and [`click`](/guides/event-logging/events/click.md).

## Event data maintainability

We do not have a well-defined ontology for event data at this time. When adding new events or updating the data attached to existing ones, carefully consider the impact your changes will have on the ability to analyze historical data as well as its maintainability going forward.

It is a best practice to keep event properties unique across different event types. That is, the same property that exists in two or more different events should represent the same information.
