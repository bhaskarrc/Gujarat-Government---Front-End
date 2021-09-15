import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimatesComponent } from './receipt-estimates.component';

describe('ReceiptEstimatesComponent', () => {
  let component: ReceiptEstimatesComponent;
  let fixture: ComponentFixture<ReceiptEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
