import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIndentConsolidationPopupComponent } from './history-indent-consolidation-popup.component';

describe('HistoryIndentConsolidationPopupComponent', () => {
  let component: HistoryIndentConsolidationPopupComponent;
  let fixture: ComponentFixture<HistoryIndentConsolidationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryIndentConsolidationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIndentConsolidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
