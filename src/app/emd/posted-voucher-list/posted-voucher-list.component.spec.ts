import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedVoucherListComponent } from './posted-voucher-list.component';

describe('PostedVoucherListComponent', () => {
  let component: PostedVoucherListComponent;
  let fixture: ComponentFixture<PostedVoucherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedVoucherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
