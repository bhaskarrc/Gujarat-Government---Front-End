import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalGrantManagementComponent } from './additional-grant-management.component';

describe('AdditionalGrantManagementComponent', () => {
  let component: AdditionalGrantManagementComponent;
  let fixture: ComponentFixture<AdditionalGrantManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalGrantManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalGrantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
