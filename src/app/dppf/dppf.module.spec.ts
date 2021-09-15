import { DppfModule } from './dppf.module';

describe('DppfModule', () => {
  let dppfModule: DppfModule;

  beforeEach(() => {
    dppfModule = new DppfModule();
  });

  it('should create an instance', () => {
    expect(dppfModule).toBeTruthy();
  });
});
