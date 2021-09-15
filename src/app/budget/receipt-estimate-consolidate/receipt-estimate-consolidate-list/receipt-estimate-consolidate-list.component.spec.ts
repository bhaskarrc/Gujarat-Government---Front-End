import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimateConsolidateListComponent } from './receipt-estimate-consolidate-list.component';

describe('ReceiptEstimateConsolidateListComponent', () => {
  let component: ReceiptEstimateConsolidateListComponent;
  let fixture: ComponentFixture<ReceiptEstimateConsolidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimateConsolidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimateConsolidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
