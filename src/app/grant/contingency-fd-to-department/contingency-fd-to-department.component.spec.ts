import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingencyFdToDepartmentComponent } from './contingency-fd-to-department.component';

describe('ContingencyFdToDepartmentComponent', () => {
  let component: ContingencyFdToDepartmentComponent;
  let fixture: ComponentFixture<ContingencyFdToDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContingencyFdToDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingencyFdToDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
