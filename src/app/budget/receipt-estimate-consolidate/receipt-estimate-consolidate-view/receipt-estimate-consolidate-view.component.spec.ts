import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimateConsolidateViewComponent } from './receipt-estimate-consolidate-view.component';

describe('ReceiptEstimateConsolidateViewComponent', () => {
  let component: ReceiptEstimateConsolidateViewComponent;
  let fixture: ComponentFixture<ReceiptEstimateConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimateConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimateConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
