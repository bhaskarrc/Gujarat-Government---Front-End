import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptConsolidateListComponent } from './receipt-consolidate-list.component';

describe('ReceiptConsolidateListComponent', () => {
  let component: ReceiptConsolidateListComponent;
  let fixture: ComponentFixture<ReceiptConsolidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptConsolidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptConsolidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
