import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPrepChallanPopupComponent } from './history-prep-challan-popup.component';

describe('HistoryPrepChallanPopupComponent', () => {
  let component: HistoryPrepChallanPopupComponent;
  let fixture: ComponentFixture<HistoryPrepChallanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPrepChallanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPrepChallanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
