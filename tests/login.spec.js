'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
const test_1 = require('@playwright/test');
const login_data_1 = require('../test-data/login.data');
test_1.test.beforeEach(({ page }, testInfo) =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto('/');
  }),
);
test_1.test.describe('User login to Demobank', () => {
  (0, test_1.test)('login with correct credentials', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      //Arrange
      const login = login_data_1.loginData.login;
      const password = login_data_1.loginData.password;
      const expectedUserName = 'Jan Demobankowy';
      // Act
      yield page.getByTestId('login-input').fill(login);
      yield page.getByTestId('password-input').fill(password);
      yield page.getByTestId('login-button').click();
      // Assert
      yield (0, test_1.expect)(page.getByTestId('user-name')).toHaveText(
        expectedUserName,
      );
    }),
  );
  (0, test_1.test)('logging proccess with incorrect login', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      // Arrange
      const wrongLogin = 'test';
      const expectedErrorMessage = 'identyfikator ma min. 8 znaków';
      // Act
      yield page.getByTestId('login-input').fill(wrongLogin);
      yield page.getByTestId('login-input').press('Tab');
      yield page.getByTestId('error-login-id').click();
      // Assert
      yield (0, test_1.expect)(page.getByTestId('error-login-id')).toHaveText(
        expectedErrorMessage,
      );
    }),
  );
  (0, test_1.test)('logging proccess with incorrect password', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      // Arrange
      const wrongPassword = 'testtest';
      const expectedErrorMessage = 'hasło ma min. 8 znaków';
      // Act
      yield page.getByTestId('login-input').fill(wrongPassword);
      yield page.getByTestId('password-input').fill('test');
      yield page.getByTestId('password-input').blur();
      // await page.getByText('hasło', {exact: true}).click();
      // Assert
      yield (0, test_1.expect)(
        page.getByTestId('error-login-password'),
      ).toHaveText(expectedErrorMessage);
    }),
  );
  //test('login with incorrect credentials', async ({ page }) => {
  //    await page.goto('https://demo-bank.vercel.app/');
  //    await page.getByTestId('login-input').click();
  //    await page.getByTestId('login-input').fill('test');
  //    await page.getByTestId('login-input').press('Tab');
  //    await page.getByTestId('password-input').fill('test');
  //    await expect(page.getByTestId('error-login-id'))
  //        .toHaveText('identyfikator ma min. 8 znak?w')
  //    await expect(page.getByTestId('error-login-password'))
  //        .toHaveText('has?o ma min. 8 znak?w')
  //    await expect(page.getByTestId('login-button'))
  //        .toBeDisabled;
  // })
});
//# sourceMappingURL=login.spec.js.map
