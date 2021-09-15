import { DppfNpsModule } from './dppf-nps.module';

describe('DppfNpsModule', () => {
  let dppfNpsModule: DppfNpsModule;

  beforeEach(() => {
    dppfNpsModule = new DppfNpsModule();
  });

  it('should create an instance', () => {
    expect(dppfNpsModule).toBeTruthy();
  });
});
