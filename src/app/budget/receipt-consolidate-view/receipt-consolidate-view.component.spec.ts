import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptConsolidateViewComponent } from './receipt-consolidate-view.component';

describe('ReceiptConsolidateViewComponent', () => {
  let component: ReceiptConsolidateViewComponent;
  let fixture: ComponentFixture<ReceiptConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
