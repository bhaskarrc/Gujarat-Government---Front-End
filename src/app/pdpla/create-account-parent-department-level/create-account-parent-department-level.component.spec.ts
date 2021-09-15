import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountParentDepartmentLevelComponent } from './create-account-parent-department-level.component';

describe('CreateAccountParentDepartmentLevelComponent', () => {
  let component: CreateAccountParentDepartmentLevelComponent;
  let fixture: ComponentFixture<CreateAccountParentDepartmentLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountParentDepartmentLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountParentDepartmentLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
