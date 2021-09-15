import { DppfgpfModule } from './dppfgpf.module';

describe('DppfgpfModule', () => {
  let dppfgpfModule: DppfgpfModule;

  beforeEach(() => {
    dppfgpfModule = new DppfgpfModule();
  });

  it('should create an instance', () => {
    expect(dppfgpfModule).toBeTruthy();
  });
});
