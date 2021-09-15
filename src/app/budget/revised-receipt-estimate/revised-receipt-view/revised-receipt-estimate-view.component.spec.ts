import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedReceiptEstimateViewComponent } from './revised-receipt-estimate-view.component';

describe('RevisedReceiptEstimateViewComponent', () => {
  let component: RevisedReceiptEstimateViewComponent;
  let fixture: ComponentFixture<RevisedReceiptEstimateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedReceiptEstimateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedReceiptEstimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
