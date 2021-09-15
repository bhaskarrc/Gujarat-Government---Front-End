import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProcessRegisterListingComponent } from './audit-process-register-listing.component';

describe('AuditProcessRegisterListingComponent', () => {
  let component: AuditProcessRegisterListingComponent;
  let fixture: ComponentFixture<AuditProcessRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditProcessRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditProcessRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
