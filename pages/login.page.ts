import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.getByTestId('login-input');
  passwordInput = this.page.getByTestId('password-input');
  loginButton = this.page.getByTestId('login-button');
  expectedText = this.page.getByTestId('user-name');
  errorLoginMessage = this.page.getByTestId('error-login-id');
  errorPasswordMessage = this.page.getByTestId('error-login-password');

  async login(login: string, password: string): Promise<void> {
    await this.loginInput.fill(login);
    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}
