import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPayConfigurationComponent } from './employees-pay-configuration.component';

describe('EmployeesPayConfigurationComponent', () => {
  let component: EmployeesPayConfigurationComponent;
  let fixture: ComponentFixture<EmployeesPayConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesPayConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesPayConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
