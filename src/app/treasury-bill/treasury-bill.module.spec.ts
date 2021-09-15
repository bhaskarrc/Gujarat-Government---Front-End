import { TreasuryBillModule } from './treasury-bill.module';

describe('TreasuryBillModule', () => {
  let treasuryBillModule: TreasuryBillModule;

  beforeEach(() => {
    treasuryBillModule = new TreasuryBillModule();
  });

  it('should create an instance', () => {
    expect(treasuryBillModule).toBeTruthy();
  });
});
