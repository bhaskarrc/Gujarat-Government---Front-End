import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDistributeStoVoucherComponent } from './ex-distribute-sto-voucher.component';

describe('ExDistributeStoVoucherComponent', () => {
  let component: ExDistributeStoVoucherComponent;
  let fixture: ComponentFixture<ExDistributeStoVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExDistributeStoVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDistributeStoVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
