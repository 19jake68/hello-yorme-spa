# mayor-ui
[![Build Status](https://cicd.labadapp.com/buildStatus/icon?job=mayor-ui)](https://cicd.labadapp.com/job/mayor-ui/)

## Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

Table of Contents:

- [Introduction](#introduction)
- [Jenkins Plan](#jenkins-plan)
- [Requirements](#requirements)
- [Development Setup](#development-setup)
- [Supported Libraries](#supported-libraries)
- [Further Help](#further-help)

## Jenkins Plan

https://cicd.labadapp.com/job/mayor-ui/

## Requirements

Make sure you have the following installed:
- [Git](https://git-scm.com/)
- Node @v10.15.0 and npm @6.4.1 (We suggest using [Node Version Manager](https://github.com/nvm-sh/nvm) to install Node)
- [Angular](https://angular.io/)
- [NodeJS](https://nodejs.org/en/)

## Development Setup

Fork this repository and clone your fork
```bash
$ git clone git@github.com:<YOUR-PROFILE>/mayor-ui.git
$ cd mayor-ui
```
Run `npm install` to install library dependencies
```bash
$ npm install
```

Wait for the installation to finish, If it's successful you should see something like this at the end of the logs:

    ...
    npm verb exit [ 0, true ]
    npm timing npm Completed in 96551ms
    npm info ok


Then install [Concurrently](https://www.npmjs.com/package/concurrently) for automated local build helpers:
```bash
$ npm install -g concurrently
```

### Install Certificate to run app on SSL
1. Double click on the certificate (`/cert/server.crt`)
2. Click on the button “Install Certificate …”
3. Select whether you want to store it on user level or on machine level
4. Click “Next”
5. Select “Place all certificates in the following store”
6. Click “Browse”
7. Select “Trusted Root Certification Authorities”
8. Click “Ok”
9. Click “Next”
10. Click “Finish”
11. If you get a prompt, click “Yes”

The certificate is now installed.   

### Start Server for Development

Run `npm run start:dev` to run the app:
```bash
$ npm run start:dev
```

Now, open up a browser and navigate to <http://localhost:4200>.

### Create a New Component

_TODO_

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running the Unit Test

Run this command on the project root:
```bash
$ npm run test
```

You should see something like this in the logs:
```
$ npm run test

> mayor-ui@1.0.0 test ~/mayor-ui
> ng test --code-coverage

 10% building modules 1/1 modules 0 active20 05 2019 14:11:07.939:WARN [proxy]: proxy "/base/build" normalized to "/base/build/"
20 05 2019 14:11:10.416:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
20 05 2019 14:11:10.417:INFO [launcher]: Launching browser ChromeHeadless with unlimited concurrency
20 05 2019 14:11:10.421:INFO [launcher]: Starting browser ChromeHeadless
 10% building modules 3/3 modules 0 active(node:12996) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
20 05 2019 14:11:15.255:INFO [HeadlessChrome 74.0.3729 (Windows 7.0.0)]: Connected on socket 7gOOPEzC2B28nth2AAAA with id 80352119
HeadlessChrome 74.0.3729 (Windows 7.0.0): Executed 19 of 19 SUCCESS (0.333 secs / 0.298 secs)
----------------------------------------|----------|----------|----------|----------|-------------------|
File                                    |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------------------|----------|----------|----------|----------|-------------------|
All files                               |    98.15 |      100 |    92.31 |    97.87 |                   |
 src                                    |      100 |      100 |      100 |      100 |                   |
  polyfills.ts                          |      100 |      100 |      100 |      100 |                   |
  test.ts                               |      100 |      100 |      100 |      100 |                   |
 src/app                                |      100 |      100 |      100 |      100 |                   |
  app.component.ts                      |      100 |      100 |      100 |      100 |                   |
 src/app/core                           |      100 |      100 |      100 |      100 |                   |
  config.service.ts                     |      100 |      100 |      100 |      100 |                   |
 src/app/features/dashboard             |      100 |      100 |      100 |      100 |                   |
  dashboard.component.ts                |      100 |      100 |      100 |      100 |                   |
 src/app/features/login                 |      100 |      100 |      100 |      100 |                   |
  login.component.ts                    |      100 |      100 |      100 |      100 |                   |
 src/app/shared/components/footer       |      100 |      100 |      100 |      100 |                   |
  footer.component.ts                   |      100 |      100 |      100 |      100 |                   |
 src/app/shared/components/header       |      100 |      100 |      100 |      100 |                   |
  header.component.ts                   |      100 |      100 |      100 |      100 |                   |
 src/app/shared/services/authentication |    91.67 |      100 |       75 |    91.18 |                   |
  authentication.service.ts             |    91.67 |      100 |       75 |    91.18 |          77,79,82 |
----------------------------------------|----------|----------|----------|----------|-------------------|
```
**Important:** Make sure the code coverage is >= 80%, otherwise, the build will fail.

### Running the Linter

Run this command on the project root:
```bash
$ npm run lint
```
You should see something like this if lint results are good:

    $ npm run lint

    > mayor-ui@1.0.0 lint ~/mayor-ui
    > ng lint

    All files pass linting.

### Build

#### Development build

- Run `npm run build`, alias for `ng build --dev` to build the project.

#### Production build

- Run `npm run build:prod`, alias for `ng build --prod` to build the project.

The above build artifacts will be stored in the `dist/` directory.

The difference between both builds can be found [here](https://github.com/angular/angular-cli/wiki/build#bundling--tree-shaking).

### Running e2e tests

To execute the e2e tests:

```bash
$ npm run start:dev
$ npm run e2e

# OR

$ npm run e2e:build
```

_Note: `ng e2e` expects to have the app already running, by default the base-url is set to `http://localhost:8626/`, so don't try to run e2e tests using `ng serve` command._

## Supported Libraries

- Node v10.15.0
- NPM 6.4.1

## Further help

- Angular CLI help. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
- [Bundling and Tree-shaking](https://github.com/angular/angular-cli/wiki/build#bundling--tree-shaking)
