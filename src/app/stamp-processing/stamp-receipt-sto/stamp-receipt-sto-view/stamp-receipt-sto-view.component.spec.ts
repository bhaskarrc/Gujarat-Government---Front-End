import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptStoViewComponent } from './stamp-receipt-sto-view.component';

describe('StampReceiptStoViewComponent', () => {
  let component: StampReceiptStoViewComponent;
  let fixture: ComponentFixture<StampReceiptStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
