import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptToPopupComponent } from './stamp-receipt-to-popup.component';

describe('StampReceiptToPopupComponent', () => {
  let component: StampReceiptToPopupComponent;
  let fixture: ComponentFixture<StampReceiptToPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptToPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptToPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
