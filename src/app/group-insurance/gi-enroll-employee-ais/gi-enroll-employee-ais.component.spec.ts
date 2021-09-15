import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEnrollEmployeeAisComponent } from './gi-enroll-employee-ais.component';

describe('GiEnrollEmployeeAisComponent', () => {
  let component: GiEnrollEmployeeAisComponent;
  let fixture: ComponentFixture<GiEnrollEmployeeAisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEnrollEmployeeAisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEnrollEmployeeAisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
