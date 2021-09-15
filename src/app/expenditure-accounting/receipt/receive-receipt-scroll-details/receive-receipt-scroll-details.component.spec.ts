import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveReceiptScrollDetailsComponent } from './receive-receipt-scroll-details.component';

describe('ReceiveReceiptScrollDetailsComponent', () => {
  let component: ReceiveReceiptScrollDetailsComponent;
  let fixture: ComponentFixture<ReceiveReceiptScrollDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveReceiptScrollDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveReceiptScrollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
