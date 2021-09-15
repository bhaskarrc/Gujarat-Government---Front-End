import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptStoComponent } from './stamp-receipt-sto.component';

describe('StampReceiptStoComponent', () => {
  let component: StampReceiptStoComponent;
  let fixture: ComponentFixture<StampReceiptStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
