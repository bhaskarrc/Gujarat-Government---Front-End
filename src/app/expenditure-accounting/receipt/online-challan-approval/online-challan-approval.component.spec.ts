import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineChallanApprovalComponent } from './online-challan-approval.component';

describe('OnlineChallanApprovalComponent', () => {
  let component: OnlineChallanApprovalComponent;
  let fixture: ComponentFixture<OnlineChallanApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineChallanApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineChallanApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
