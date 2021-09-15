import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDoubleSinglePopupComponent } from './history-double-single-popup.component';

describe('HistoryDoubleSinglePopupComponent', () => {
  let component: HistoryDoubleSinglePopupComponent;
  let fixture: ComponentFixture<HistoryDoubleSinglePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDoubleSinglePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDoubleSinglePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
