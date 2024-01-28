import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  receiverNameInput = this.page.getByTestId('transfer_receiver');
  receiverAccountInput = this.page.getByTestId('form_account_to');
  transferAmountInput = this.page.getByTestId('form_amount');
  transferTitleInput = this.page.getByTestId('form_title');
  executeTransfer = this.page.getByRole('button', { name: 'wykonaj przelew' });
  closeButton = this.page.getByTestId('close-button');
  showMessages = this.page.locator('#show_messages');

  async makeTransfer(
    receiverName: string,
    receiverAccount: string,
    transferAmount: string,
    transferTitle: string,
  ): Promise<void> {
    await this.receiverNameInput.fill(receiverName);
    await this.receiverAccountInput.fill(receiverAccount);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferTitleInput.fill(transferTitle);

    await this.executeTransfer.click();
    await this.closeButton.click();
  }
}
