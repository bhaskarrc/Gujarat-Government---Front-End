import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreationsComponent } from './employee-creations.component';

describe('EmployeeCreationsComponent', () => {
  let component: EmployeeCreationsComponent;
  let fixture: ComponentFixture<EmployeeCreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
