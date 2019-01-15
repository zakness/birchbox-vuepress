# logger middleware

[`logger` middleware](/src/middleware/logger/index.js) is the default home for all [event logging](/guides/event-logging) that are triggered by Redux actions. Event logging is a side-effect (it does not update the Redux store) and thus middleware is the best place for it. Logging here also has the benefit of easy access to the entire Redux state at the time of the event.
