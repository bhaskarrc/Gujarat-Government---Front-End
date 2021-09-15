import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculationSheetConformationComponent } from './interest-calculation-sheet-conformation.component';

describe('InterestCalculationSheetConformationComponent', () => {
  let component: InterestCalculationSheetConformationComponent;
  let fixture: ComponentFixture<InterestCalculationSheetConformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCalculationSheetConformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalculationSheetConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
