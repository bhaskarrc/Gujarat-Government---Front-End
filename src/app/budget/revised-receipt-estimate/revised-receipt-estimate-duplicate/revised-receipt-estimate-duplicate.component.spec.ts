import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedReceiptEstimateDuplicateComponent } from './revised-receipt-estimate-duplicate.component';

describe('RevisedReceiptEstimateDuplicateComponent', () => {
  let component: RevisedReceiptEstimateDuplicateComponent;
  let fixture: ComponentFixture<RevisedReceiptEstimateDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedReceiptEstimateDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedReceiptEstimateDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
