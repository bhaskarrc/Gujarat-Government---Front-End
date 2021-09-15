import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimateConsolidateComponent } from './receipt-estimate-consolidate.component';

describe('ReceiptEstimateConsolidateComponent', () => {
  let component: ReceiptEstimateConsolidateComponent;
  let fixture: ComponentFixture<ReceiptEstimateConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimateConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimateConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
