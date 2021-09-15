import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDepartmentComponent } from './from-department.component';

describe('FromDepartmentComponent', () => {
  let component: FromDepartmentComponent;
  let fixture: ComponentFixture<FromDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
