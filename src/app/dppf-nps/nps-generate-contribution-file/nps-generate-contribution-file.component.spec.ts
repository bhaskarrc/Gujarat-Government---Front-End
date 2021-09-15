import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsGenerateContributionFileComponent } from './nps-generate-contribution-file.component';

describe('NpsGenerateContributionFileComponent', () => {
  let component: NpsGenerateContributionFileComponent;
  let fixture: ComponentFixture<NpsGenerateContributionFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsGenerateContributionFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsGenerateContributionFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
