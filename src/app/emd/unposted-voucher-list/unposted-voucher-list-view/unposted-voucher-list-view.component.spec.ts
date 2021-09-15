import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpostedVoucherListViewComponent } from './unposted-voucher-list-view.component';

describe('UnpostedVoucherListViewComponent', () => {
  let component: UnpostedVoucherListViewComponent;
  let fixture: ComponentFixture<UnpostedVoucherListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpostedVoucherListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpostedVoucherListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
