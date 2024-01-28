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
test_1.test.describe('Payments tests', () => {
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
  (0, test_1.test)('Payments', ({ page }) =>
    __awaiter(void 0, void 0, void 0, function* () {}),
  );
});
//# sourceMappingURL=test.spec.js.map
