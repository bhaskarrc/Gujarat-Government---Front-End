import { ChequeInventoryModule } from './cheque-inventory.module';

describe('ChequeInventoryModule', () => {
  let chequeInventoryModule: ChequeInventoryModule;

  beforeEach(() => {
    chequeInventoryModule = new ChequeInventoryModule();
  });

  it('should create an instance', () => {
    expect(chequeInventoryModule).toBeTruthy();
  });
});
