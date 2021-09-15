import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptManagementLoginComponent } from './receipt-management-login.component';

describe('ReceiptManagementLoginComponent', () => {
  let component: ReceiptManagementLoginComponent;
  let fixture: ComponentFixture<ReceiptManagementLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptManagementLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptManagementLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
