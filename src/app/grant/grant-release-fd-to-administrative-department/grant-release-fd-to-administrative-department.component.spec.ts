import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantReleaseFdToAdministrativeDepartmentComponent } from './grant-release-fd-to-administrative-department.component';

describe('GrantReleaseFdToAdministrativeDepartmentComponent', () => {
  let component: GrantReleaseFdToAdministrativeDepartmentComponent;
  let fixture: ComponentFixture<GrantReleaseFdToAdministrativeDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantReleaseFdToAdministrativeDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantReleaseFdToAdministrativeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
