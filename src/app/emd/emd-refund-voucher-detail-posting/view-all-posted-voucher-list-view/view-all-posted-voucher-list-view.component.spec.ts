import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPostedVoucherListViewComponent } from './view-all-posted-voucher-list-view.component';

describe('ViewAllPostedVoucherListViewComponent', () => {
  let component: ViewAllPostedVoucherListViewComponent;
  let fixture: ComponentFixture<ViewAllPostedVoucherListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPostedVoucherListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPostedVoucherListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
