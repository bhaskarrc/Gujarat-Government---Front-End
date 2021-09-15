import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertDocumentsForCorrectionComponent } from './revert-documents-for-correction.component';

describe('RevertDocumentsForCorrectionComponent', () => {
  let component: RevertDocumentsForCorrectionComponent;
  let fixture: ComponentFixture<RevertDocumentsForCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertDocumentsForCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertDocumentsForCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
