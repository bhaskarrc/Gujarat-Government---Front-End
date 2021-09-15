import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiDailyInputSheetAisComponent } from './gi-daily-input-sheet-ais.component';

describe('GiDailyInputSheetAisComponent', () => {
  let component: GiDailyInputSheetAisComponent;
  let fixture: ComponentFixture<GiDailyInputSheetAisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiDailyInputSheetAisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiDailyInputSheetAisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
