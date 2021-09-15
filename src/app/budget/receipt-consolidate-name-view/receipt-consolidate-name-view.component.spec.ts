import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptConsolidateNameViewComponent } from './receipt-consolidate-name-view.component';

describe('ReceiptConsolidateNameViewComponent', () => {
  let component: ReceiptConsolidateNameViewComponent;
  let fixture: ComponentFixture<ReceiptConsolidateNameViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptConsolidateNameViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptConsolidateNameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
