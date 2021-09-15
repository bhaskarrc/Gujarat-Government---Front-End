import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedEmdVoucherComponent } from './posted-emd-voucher.component';

describe('PostedEmdVoucherComponent', () => {
  let component: PostedEmdVoucherComponent;
  let fixture: ComponentFixture<PostedEmdVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedEmdVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedEmdVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
