import { GroupInsuranceModule } from './group-insurance.module';

describe('GroupInsuranceModule', () => {
  let groupInsuranceModule: GroupInsuranceModule;

  beforeEach(() => {
    groupInsuranceModule = new GroupInsuranceModule();
  });

  it('should create an instance', () => {
    expect(groupInsuranceModule).toBeTruthy();
  });
});
