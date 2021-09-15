import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountOfGroupInsuranceComponent } from './submit-account-of-group-insurance.component';

describe('SubmitAccountOfGroupInsuranceComponent', () => {
  let component: SubmitAccountOfGroupInsuranceComponent;
  let fixture: ComponentFixture<SubmitAccountOfGroupInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountOfGroupInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountOfGroupInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
