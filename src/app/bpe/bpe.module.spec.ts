import { BpeModule } from './bpe.module';

describe('BpeModule', () => {
  let bpeModule: BpeModule;

  beforeEach(() => {
    bpeModule = new BpeModule();
  });

  it('should create an instance', () => {
    expect(bpeModule).toBeTruthy();
  });
});
