import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInputSheetEightSixFiveEightComponent } from './daily-input-sheet-eight-six-five-eight.component';

describe('DailyInputSheetEightSixFiveEightComponent', () => {
  let component: DailyInputSheetEightSixFiveEightComponent;
  let fixture: ComponentFixture<DailyInputSheetEightSixFiveEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyInputSheetEightSixFiveEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyInputSheetEightSixFiveEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
