import { DppfHbaModule } from './dppf-hba.module';

describe('DppfHbaModule', () => {
  let dppfHbaModule: DppfHbaModule;

  beforeEach(() => {
    dppfHbaModule = new DppfHbaModule();
  });

  it('should create an instance', () => {
    expect(dppfHbaModule).toBeTruthy();
  });
});
