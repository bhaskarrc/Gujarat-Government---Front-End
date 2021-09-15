import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpostedVoucherAddComponent } from './unposted-voucher-add.component';

describe('UnpostedVoucherAddComponent', () => {
  let component: UnpostedVoucherAddComponent;
  let fixture: ComponentFixture<UnpostedVoucherAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpostedVoucherAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpostedVoucherAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
