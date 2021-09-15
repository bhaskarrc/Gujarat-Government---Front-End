import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEntryPaymentComponent } from './transfer-entry-payment.component';

describe('TransferEntryPaymentComponent', () => {
  let component: TransferEntryPaymentComponent;
  let fixture: ComponentFixture<TransferEntryPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEntryPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEntryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
