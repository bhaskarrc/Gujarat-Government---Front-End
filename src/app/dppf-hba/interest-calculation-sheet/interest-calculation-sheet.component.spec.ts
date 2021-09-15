import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculationSheetComponent } from './interest-calculation-sheet.component';

describe('InterestCalculationSheetComponent', () => {
  let component: InterestCalculationSheetComponent;
  let fixture: ComponentFixture<InterestCalculationSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCalculationSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalculationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
