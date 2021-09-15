import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiDailyInputSheetComponent } from './gi-daily-input-sheet.component';

describe('GiDailyInputSheetComponent', () => {
  let component: GiDailyInputSheetComponent;
  let fixture: ComponentFixture<GiDailyInputSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiDailyInputSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiDailyInputSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
