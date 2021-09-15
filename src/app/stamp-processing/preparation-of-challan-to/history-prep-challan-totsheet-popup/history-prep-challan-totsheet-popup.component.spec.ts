import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPrepChallanTotsheetPopupComponent } from './history-prep-challan-totsheet-popup.component';

describe('HistoryPrepChallanTotsheetPopupComponent', () => {
  let component: HistoryPrepChallanTotsheetPopupComponent;
  let fixture: ComponentFixture<HistoryPrepChallanTotsheetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPrepChallanTotsheetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPrepChallanTotsheetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
