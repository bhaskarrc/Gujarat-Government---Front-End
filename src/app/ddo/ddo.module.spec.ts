import { DdoModule } from './ddo.module';

describe('DdoModule', () => {
  let ddoModule: DdoModule;

  beforeEach(() => {
    ddoModule = new DdoModule();
  });

  it('should create an instance', () => {
    expect(ddoModule).toBeTruthy();
  });
});
