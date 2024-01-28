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
    const login = login_data_1.loginData.login;
    const password = login_data_1.loginData.password;
    yield page.goto('/');
    yield page.getByTestId('login-input').fill(login);
    yield page.getByTestId('password-input').fill(password);
    yield page.getByTestId('login-button').click();
  }),
);
test_1.test.describe('Pulpit tests', () => {
  (0, test_1.test)('test1', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      //Arrange
      const recieverId = '2';
      const transferAmount = '150,00';
      const transeferTitle = 'titletitletitle';
      const expectedText = `Przelew wykonany! Chuck Demobankowy - ${transferAmount}PLN - ${transeferTitle}`;
      // Act
      yield page
        .locator('#widget_1_transfer_receiver')
        .selectOption(recieverId);
      yield page.locator('#widget_1_transfer_amount').fill(transferAmount);
      yield page.locator('#widget_1_transfer_title').fill(transeferTitle);
      // await page.getByRole('button', { name: 'wykonaj' }).click();
      yield page.locator('#execute_btn').click();
      yield page.getByTestId('close-button').click();
      //Assert
      // await page.locator('div').filter({ hasText: 'Przelew wykonany! Chuck' }).nth(1).click();
      yield (0, test_1.expect)(page.locator('#show_messages')).toHaveText(
        expectedText,
      );
    }),
  );
  (0, test_1.test)('successfull mobile top-up', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      // Arrange
      const transferAmount = '50,00';
      const expectedReceiver = '500 xxx xxx';
      const expectedMessage = `Doładowanie wykonane! ${transferAmount}PLN na numer ${expectedReceiver}`;
      // Act
      yield page
        .locator('#widget_1_topup_receiver')
        .selectOption(expectedReceiver);
      yield page.locator('#widget_1_topup_amount').fill(transferAmount);
      yield page.getByRole('checkbox').click();
      yield page.getByRole('button', { name: 'doładuj telefon' }).click();
      yield page.getByTestId('close-button').click();
      // Assert
      // await expect(page.locator('div').filter({ hasText: 'Doładowanie wykonane! 50,' }).nth(1)).toHaveText('Doładowanie wykonane! 50,00PLN na numer 500 xxx xxx');
      yield (0, test_1.expect)(page.locator('#show_messages')).toHaveText(
        expectedMessage,
      );
    }),
  );
});
//# sourceMappingURL=pulpit.spec.js.map
