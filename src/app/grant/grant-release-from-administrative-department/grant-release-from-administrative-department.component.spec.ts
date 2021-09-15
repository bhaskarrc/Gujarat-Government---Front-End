import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantReleaseFromAdministrativeDepartmentComponent } from './grant-release-from-administrative-department.component';

describe('GrantReleaseFromAdministrativeDepartmentComponent', () => {
  let component: GrantReleaseFromAdministrativeDepartmentComponent;
  let fixture: ComponentFixture<GrantReleaseFromAdministrativeDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantReleaseFromAdministrativeDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantReleaseFromAdministrativeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
