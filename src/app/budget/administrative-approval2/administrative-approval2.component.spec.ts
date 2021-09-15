import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeApproval2Component } from './administrative-approval2.component';

describe('AdministrativeApproval2Component', () => {
  let component: AdministrativeApproval2Component;
  let fixture: ComponentFixture<AdministrativeApproval2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeApproval2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeApproval2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
