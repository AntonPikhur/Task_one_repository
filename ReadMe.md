Resoursess:

./Test_Cases.xlsx
Description of test cases.

./helper/generator.page.js
Contains page with random generators needed for test of registration procedure.


./tests/Playwright-test
Contains 5 tests.
///////////////////////////////////////////////////////////////////////////////////////////////

How to use:

To start testing:
npx playwright test --reporter=line,experimental-allure-playwright

To generate allure report:
npx allure generate --clean

To open allure report in browser:
npx allure open
