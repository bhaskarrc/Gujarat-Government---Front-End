import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceRegistrationFormComponent } from './grievance-registration-form.component';

describe('GrievanceRegistrationFormComponent', () => {
  let component: GrievanceRegistrationFormComponent;
  let fixture: ComponentFixture<GrievanceRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
