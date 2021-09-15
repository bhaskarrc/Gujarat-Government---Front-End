import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectPensionBillsComponent } from './approve-reject-pension-bills.component';

describe('ApproveRejectPensionBillsComponent', () => {
  let component: ApproveRejectPensionBillsComponent;
  let fixture: ComponentFixture<ApproveRejectPensionBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectPensionBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectPensionBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
