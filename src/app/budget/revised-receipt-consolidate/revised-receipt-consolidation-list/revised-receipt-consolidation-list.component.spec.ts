import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedReceiptConsolidationListComponent } from './revised-receipt-consolidation-list.component';

describe('RevisedReceiptConsolidationListComponent', () => {
  let component: RevisedReceiptConsolidationListComponent;
  let fixture: ComponentFixture<RevisedReceiptConsolidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedReceiptConsolidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedReceiptConsolidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
