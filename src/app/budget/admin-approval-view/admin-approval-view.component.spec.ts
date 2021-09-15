import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalViewComponent } from './admin-approval-view.component';

describe('AdminApprovalViewComponent', () => {
  let component: AdminApprovalViewComponent;
  let fixture: ComponentFixture<AdminApprovalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApprovalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApprovalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
