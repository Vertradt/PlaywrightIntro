import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';
import { PaymentPage } from '../pages/payment.page';
import { SideMenuComponent } from '../components/sideMenuComponent';

let loginPage: LoginPage;
let sideMenu: SideMenuComponent;
let paymentPage: PaymentPage;
test.describe('Payments tests', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    const login = loginData.login;
    const password = loginData.password;
    loginPage = new LoginPage(page);
    sideMenu = new SideMenuComponent(page);
    paymentPage = new PaymentPage(page);

    await page.goto('/');

    await loginPage.login(password, login);
    await sideMenu.paymentButton.click();
  });

  test('Successful payment', async ({ page }) => {
    // Arrange
    const receiverName = 'Jan Nowak';
    const receiverAccount = '12 3456 7890 0000 0000 0000 00000';
    const transferAmount = '150,00';
    const transferTitle = 'Rachunek';
    const expectedText = `Przelew wykonany! ${transferAmount}PLN dla ${receiverName}`;

    // Act
    await paymentPage.makeTransfer(
      receiverName,
      receiverAccount,
      transferAmount,
      transferTitle,
    );

    // Assert
    await expect(paymentPage.showMessages).toHaveText(expectedText);
  });
});
