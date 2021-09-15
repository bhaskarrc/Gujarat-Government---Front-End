import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedReceiptConsolidationViewComponent } from './revised-receipt-consolidation-view.component';

describe('RevisedReceiptConsolidationViewComponent', () => {
  let component: RevisedReceiptConsolidationViewComponent;
  let fixture: ComponentFixture<RevisedReceiptConsolidationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedReceiptConsolidationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedReceiptConsolidationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
