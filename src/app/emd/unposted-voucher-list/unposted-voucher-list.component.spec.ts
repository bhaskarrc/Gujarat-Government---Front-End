import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpostedVoucherListComponent } from './unposted-voucher-list.component';

describe('UnpostedVoucherListComponent', () => {
  let component: UnpostedVoucherListComponent;
  let fixture: ComponentFixture<UnpostedVoucherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpostedVoucherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpostedVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
