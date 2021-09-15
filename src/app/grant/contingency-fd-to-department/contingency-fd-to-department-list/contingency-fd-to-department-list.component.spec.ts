import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingencyFdToDepartmentListComponent } from './contingency-fd-to-department-list.component';

describe('ContingencyFdToDepartmentListComponent', () => {
  let component: ContingencyFdToDepartmentListComponent;
  let fixture: ComponentFixture<ContingencyFdToDepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContingencyFdToDepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContingencyFdToDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
