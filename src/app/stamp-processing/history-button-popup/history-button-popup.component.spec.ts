import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryButtonPopupComponent } from './history-button-popup.component';

describe('HistoryButtonPopupComponent', () => {
  let component: HistoryButtonPopupComponent;
  let fixture: ComponentFixture<HistoryButtonPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryButtonPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryButtonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
