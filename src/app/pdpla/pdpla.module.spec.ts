import { PdplaModule } from './pdpla.module';

describe('PdplaModule', () => {
  let pdplaModule: PdplaModule;

  beforeEach(() => {
    pdplaModule = new PdplaModule();
  });

  it('should create an instance', () => {
    expect(pdplaModule).toBeTruthy();
  });
});
