# Oak Middleware Collection

A collection of very basic commonly used middlewares for oak with deno.

## Included Middleware

- Error: Respond with interal server error and log error to console
- Logger: Log server requests to console
- Response Time: Set response time flag in response header (also used for logger middleware)

## Suggested order of middleware execution

First middleware should be the error middleware followed by the logger and response time after that you can handle your routes.

