import { LocalFundModule } from './local-fund.module';

describe('LocalFundModule', () => {
  let localFundModule: LocalFundModule;

  beforeEach(() => {
    localFundModule = new LocalFundModule();
  });

  it('should create an instance', () => {
    expect(localFundModule).toBeTruthy();
  });
});
