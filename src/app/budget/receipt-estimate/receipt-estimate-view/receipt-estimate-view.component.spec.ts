import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimateViewComponent } from './receipt-estimate-view.component';

describe('ReceiptEstimateViewComponent', () => {
  let component: ReceiptEstimateViewComponent;
  let fixture: ComponentFixture<ReceiptEstimateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
