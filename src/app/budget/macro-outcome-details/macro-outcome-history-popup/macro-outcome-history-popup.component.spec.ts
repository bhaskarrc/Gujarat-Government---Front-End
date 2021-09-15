import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroOutcomeHistoryPopupComponent } from './macro-outcome-history-popup.component';

describe('MacroOutcomeHistoryPopupComponent', () => {
  let component: MacroOutcomeHistoryPopupComponent;
  let fixture: ComponentFixture<MacroOutcomeHistoryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroOutcomeHistoryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroOutcomeHistoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
