import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandOfInterestConformationLetterComponent } from './demand-of-interest-conformation-letter.component';

describe('DemandOfInterestConformationLetterComponent', () => {
  let component: DemandOfInterestConformationLetterComponent;
  let fixture: ComponentFixture<DemandOfInterestConformationLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandOfInterestConformationLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandOfInterestConformationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
