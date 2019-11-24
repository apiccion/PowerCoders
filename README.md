# Unit Testing Workshop
## Background
This repository contains an NodeJS unit testing workshop for PowerCoders.

The repository contains two webapps:

1.  calc/
1.  account/

Both apps contain bugs. The students will write first test cases and then
implement fixes.

The files calc/math_lib.js and account/accounts.js contain the business logic.
The directories calc/test/ and account/test/ contain skeleton Mocha unit tests.

## How-To
### Run the Webapps

From within the calc/ or account/ directory:

```
  npm install
  node app
  Navigate to http://localhost:1337
```

### Run Tests
A skeleton Mocha test-suite is provided.

From within the calc/ or account/ directory:

```
  npm test
```
