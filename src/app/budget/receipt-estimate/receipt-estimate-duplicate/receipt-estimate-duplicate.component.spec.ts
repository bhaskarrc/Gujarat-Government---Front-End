import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimateDuplicateComponent } from './receipt-estimate-duplicate.component';

describe('ReceiptEstimateDuplicateComponent', () => {
  let component: ReceiptEstimateDuplicateComponent;
  let fixture: ComponentFixture<ReceiptEstimateDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimateDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimateDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
