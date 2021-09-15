import { ExpenditureAccountingModule } from './expenditure-accounting.module';

describe('ExpenditureAccountingModule', () => {
  let expenditureAccountingModule: ExpenditureAccountingModule;

  beforeEach(() => {
    expenditureAccountingModule = new ExpenditureAccountingModule();
  });

  it('should create an instance', () => {
    expect(expenditureAccountingModule).toBeTruthy();
  });
});
