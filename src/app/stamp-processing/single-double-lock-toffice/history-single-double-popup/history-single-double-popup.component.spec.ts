import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySingleDoublePopupComponent } from './history-single-double-popup.component';

describe('HistorySingleDoublePopupComponent', () => {
  let component: HistorySingleDoublePopupComponent;
  let fixture: ComponentFixture<HistorySingleDoublePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySingleDoublePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySingleDoublePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
