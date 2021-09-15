import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionVoucherListComponent } from './pension-voucher-list.component';

describe('PensionVoucherListComponent', () => {
  let component: PensionVoucherListComponent;
  let fixture: ComponentFixture<PensionVoucherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionVoucherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
