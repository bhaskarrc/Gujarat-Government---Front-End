import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptConsolidateComponent } from './receipt-consolidate.component';

describe('ReceiptConsolidateComponent', () => {
  let component: ReceiptConsolidateComponent;
  let fixture: ComponentFixture<ReceiptConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
