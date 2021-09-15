import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedVoucherListHaComponent } from './posted-voucher-list-ha.component';

describe('PostedVoucherListHaComponent', () => {
  let component: PostedVoucherListHaComponent;
  let fixture: ComponentFixture<PostedVoucherListHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedVoucherListHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedVoucherListHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
