import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeApprovalViewComponent } from './administrative-approval-view.component';

describe('AdministrativeApprovalViewComponent', () => {
  let component: AdministrativeApprovalViewComponent;
  let fixture: ComponentFixture<AdministrativeApprovalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeApprovalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeApprovalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
