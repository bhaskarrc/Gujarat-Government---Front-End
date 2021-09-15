import { ContractManagementModule } from './contract-management.module';

describe('ContractManagementModule', () => {
  let contractManagementModule: ContractManagementModule;

  beforeEach(() => {
    contractManagementModule = new ContractManagementModule();
  });

  it('should create an instance', () => {
    expect(contractManagementModule).toBeTruthy();
  });
});
