# HttpInterceptorDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

In this project I used `HttpInterceptor` for handle http/https error.
Handling errors properly is essential in building a high-quality user experience. By providing readable messages to users, they can either understand why the error occured or at least have an error code to give to your support team, resulting in much faster issue resolution. While ErrorHandler is a useful way to handle errors across an app, HttpInterceptor provides a much more robust solution for handling `server` and `connection-related` errors giving the ability to retry or return a richer error response to the client.

HttpInterceptor was introduced with `Angular 4.3.1`. It provides a way to intercept http requests and responses to transform or handle them before passing them along. This is a very useful tool in general; we can modify headers, add authentication tokens, modify data format, and more. By registering these interceptors in our root module, we can handle everything in the application, even with lazy loading implemented.

Our application is now a lot more maintainable - as we create new services, they will automatically handle errors. We are even able to add the `retry(1)` function to our interceptor, so all http requests will be retried once before failing. Now that we have this in one place, if we want to modify our error handling, we can simply go to this one file and update it globally across our application. This is definitely the "Angular way" to handle this problem.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
