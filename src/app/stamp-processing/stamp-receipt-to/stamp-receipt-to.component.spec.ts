import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReceiptToComponent } from './stamp-receipt-to.component';

describe('StampReceiptToComponent', () => {
  let component: StampReceiptToComponent;
  let fixture: ComponentFixture<StampReceiptToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReceiptToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReceiptToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
