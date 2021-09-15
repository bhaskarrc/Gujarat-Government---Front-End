import { ReceiptManagementModule } from './receipt-management.module';

describe('ReceiptManagementModule', () => {
  let receiptManagementModule: ReceiptManagementModule;

  beforeEach(() => {
    receiptManagementModule = new ReceiptManagementModule();
  });

  it('should create an instance', () => {
    expect(receiptManagementModule).toBeTruthy();
  });
});
