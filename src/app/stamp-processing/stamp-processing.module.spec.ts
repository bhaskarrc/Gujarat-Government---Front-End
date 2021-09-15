import { StampProcessingModule } from './stamp-processing.module';

describe('StampProcessingModule', () => {
  let stampProcessingModule: StampProcessingModule;

  beforeEach(() => {
    stampProcessingModule = new StampProcessingModule();
  });

  it('should create an instance', () => {
    expect(stampProcessingModule).toBeTruthy();
  });
});
