import { expect, Page } from '@playwright/test';

export class PulpitPage {
  constructor(private page: Page) {}

  transferReceiver = this.page.locator('#widget_1_transfer_receiver');
  transferAmountInput = this.page.locator('#widget_1_transfer_amount');
  transferTitle = this.page.locator('#widget_1_transfer_title');
  executeTransferButton = this.page.getByRole('button', { name: 'wykonaj' });
  closeButton = this.page.getByTestId('close-button');
  showMessages = this.page.locator('#show_messages');
  topUpReceiver = this.page.locator('#widget_1_topup_receiver');
  topUpAmount = this.page.locator('#widget_1_topup_amount');
  checkbox = this.page.getByRole('checkbox');
  executeTopUpButton = this.page.getByRole('button', {
    name: 'doładuj telefon',
  });

  async makeQuickTransfer(
    receiverId: string,
    transferAmount: string,
    transferTitle: string,
  ): Promise<void> {
    await this.transferReceiver.selectOption(receiverId);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferTitle.fill(transferTitle);

    await this.executeTransferButton.click();
    await this.closeButton.click();
  }

  async makeTopUp(
    transferAmount: string,
    expectedReceiver: string,
  ): Promise<void> {
    await this.topUpReceiver.selectOption(expectedReceiver);
    await this.topUpAmount.fill(transferAmount);

    await this.checkbox.click();
    await this.executeTopUpButton.click();
    await this.closeButton.click();
  }
}
