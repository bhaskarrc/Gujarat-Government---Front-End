import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpostedVoucherListUpdateComponent } from './unposted-voucher-list-update.component';

describe('UnpostedVoucherListUpdateComponent', () => {
  let component: UnpostedVoucherListUpdateComponent;
  let fixture: ComponentFixture<UnpostedVoucherListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpostedVoucherListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpostedVoucherListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
