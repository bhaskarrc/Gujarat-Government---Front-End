import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptStoListComponent } from './stamp-receipt-sto-list.component';

describe('StampReceiptStoListComponent', () => {
  let component: StampReceiptStoListComponent;
  let fixture: ComponentFixture<StampReceiptStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
