import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptToListComponent } from './stamp-receipt-to-list.component';

describe('StampReceiptToListComponent', () => {
  let component: StampReceiptToListComponent;
  let fixture: ComponentFixture<StampReceiptToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
