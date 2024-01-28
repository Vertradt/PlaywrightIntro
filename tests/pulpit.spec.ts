import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PulpitPage } from '../pages/pulpit.page';

let loginPage: LoginPage;
let pulpitPage: PulpitPage;
test.beforeEach(async ({ page }, testInfo) => {
  const login = loginData.login;
  const password = loginData.password;
  loginPage = new LoginPage(page);
  pulpitPage = new PulpitPage(page);

  await page.goto('/');

  await loginPage.login(password, login);
});

test.describe('Pulpit tests', () => {
  test('test1', async ({ page }) => {
    //Arrange
    const receiverId = '2';
    const transferAmount = '150,00';
    const transferTitle = 'titletitletitle';
    const expectedText = `Przelew wykonany! Chuck Demobankowy - ${transferAmount}PLN - ${transferTitle}`;

    // Act
    await pulpitPage.makeQuickTransfer(
      receiverId,
      transferAmount,
      transferTitle,
    );

    //Assert
    await expect(pulpitPage.showMessages).toHaveText(expectedText);
  });

  test('successfull mobile top-up', async ({ page }) => {
    // Arrange
    const transferAmount = '50,00';
    const expectedReceiver = '500 xxx xxx';
    const expectedMessage = `Doładowanie wykonane! ${transferAmount}PLN na numer ${expectedReceiver}`;

    // Act
    await pulpitPage.makeTopUp(transferAmount, expectedReceiver);

    // Assert
    await expect(pulpitPage.showMessages).toHaveText(expectedMessage);
  });
});
