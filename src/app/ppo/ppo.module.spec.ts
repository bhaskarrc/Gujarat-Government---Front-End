import { PpoModule } from './ppo.module';

describe('PpoModule', () => {
  let ppoModule: PpoModule;

  beforeEach(() => {
    ppoModule = new PpoModule();
  });

  it('should create an instance', () => {
    expect(ppoModule).toBeTruthy();
  });
});
