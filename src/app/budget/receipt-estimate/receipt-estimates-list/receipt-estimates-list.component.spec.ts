import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptEstimatesListComponent } from './receipt-estimates-list.component';

describe('ReceiptEstimatesListComponent', () => {
  let component: ReceiptEstimatesListComponent;
  let fixture: ComponentFixture<ReceiptEstimatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEstimatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEstimatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
