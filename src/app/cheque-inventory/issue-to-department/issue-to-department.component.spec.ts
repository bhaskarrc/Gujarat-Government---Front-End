import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueToDepartmentComponent } from './issue-to-department.component';

describe('IssueToDepartmentComponent', () => {
  let component: IssueToDepartmentComponent;
  let fixture: ComponentFixture<IssueToDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueToDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueToDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
