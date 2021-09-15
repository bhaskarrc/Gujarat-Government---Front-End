import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporteAgencyRegistrationComponent } from './corporte-agency-registration.component';

describe('CorporteAgencyRegistrationComponent', () => {
  let component: CorporteAgencyRegistrationComponent;
  let fixture: ComponentFixture<CorporteAgencyRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporteAgencyRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporteAgencyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
