import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedVoucherListViewComponent } from './posted-voucher-list-view.component';

describe('PostedVoucherListViewComponent', () => {
  let component: PostedVoucherListViewComponent;
  let fixture: ComponentFixture<PostedVoucherListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedVoucherListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedVoucherListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
