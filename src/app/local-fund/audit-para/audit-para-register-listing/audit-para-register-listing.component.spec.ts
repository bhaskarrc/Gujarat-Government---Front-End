import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParaRegisterListingComponent } from './audit-para-register-listing.component';

describe('AuditParaRegisterListingComponent', () => {
  let component: AuditParaRegisterListingComponent;
  let fixture: ComponentFixture<AuditParaRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditParaRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditParaRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
