import { AgOfficeModule } from './ag-office.module';

describe('AgOfficeModule', () => {
  let agOfficeModule: AgOfficeModule;

  beforeEach(() => {
    agOfficeModule = new AgOfficeModule();
  });

  it('should create an instance', () => {
    expect(agOfficeModule).toBeTruthy();
  });
});
