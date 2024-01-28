import { test, expect } from '@playwright/test';
import { settings } from 'node:cluster';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage;
test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});
test.describe('User login to Demobank', () => {
  test('login with correct credentials', async ({ page }) => {
    //Arrange
    const login = loginData.login;
    const password = loginData.password;
    const expectedUserName = 'Jan Demobankowy';
    // Act

    await loginPage.login(password, login);

    // Assert
    await expect(loginPage.expectedText).toHaveText(expectedUserName);
  });

  test('logging proccess with incorrect login', async ({ page }) => {
    // Arrange
    const wrongLogin = 'test';
    const expectedErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    await loginPage.loginInput.fill(wrongLogin);
    await loginPage.loginInput.press('Tab');

    // Assert
    await expect(loginPage.errorLoginMessage).toHaveText(expectedErrorMessage);
  });

  test('logging proccess with incorrect password', async ({ page }) => {
    // Arrange
    const wrongPassword = 'test';
    const expectedErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    await loginPage.passwordInput.fill(wrongPassword);
    await loginPage.passwordInput.blur();

    // Assert
    await expect(loginPage.errorPasswordMessage).toHaveText(
      expectedErrorMessage,
    );
  });
});
