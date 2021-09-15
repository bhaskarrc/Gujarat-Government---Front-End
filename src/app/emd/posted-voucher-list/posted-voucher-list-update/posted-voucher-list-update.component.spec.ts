import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedVoucherListUpdateComponent } from './posted-voucher-list-update.component';

describe('PostedVoucherListUpdateComponent', () => {
  let component: PostedVoucherListUpdateComponent;
  let fixture: ComponentFixture<PostedVoucherListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedVoucherListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedVoucherListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
