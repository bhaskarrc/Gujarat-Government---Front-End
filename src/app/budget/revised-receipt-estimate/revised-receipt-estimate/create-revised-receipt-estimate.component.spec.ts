import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRevisedReceiptEstimateComponent } from './create-revised-receipt-estimate.component';

describe('CreateRevisedReceiptEstimateComponent', () => {
  let component: CreateRevisedReceiptEstimateComponent;
  let fixture: ComponentFixture<CreateRevisedReceiptEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRevisedReceiptEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRevisedReceiptEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
