import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInputSheetTreasuryOfficeComponent } from './daily-input-sheet-treasury-office.component';

describe('DailyInputSheetTreasuryOfficeComponent', () => {
  let component: DailyInputSheetTreasuryOfficeComponent;
  let fixture: ComponentFixture<DailyInputSheetTreasuryOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInputSheetTreasuryOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInputSheetTreasuryOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
