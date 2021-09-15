import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedReceiptConsolidationComponent } from './revised-receipt-consolidation.component';

describe('RevisedReceiptConsolidationComponent', () => {
  let component: RevisedReceiptConsolidationComponent;
  let fixture: ComponentFixture<RevisedReceiptConsolidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedReceiptConsolidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedReceiptConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
