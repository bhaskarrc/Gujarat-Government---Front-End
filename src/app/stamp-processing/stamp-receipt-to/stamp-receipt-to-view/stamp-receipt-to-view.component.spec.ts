import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptToViewComponent } from './stamp-receipt-to-view.component';

describe('StampReceiptToViewComponent', () => {
  let component: StampReceiptToViewComponent;
  let fixture: ComponentFixture<StampReceiptToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
