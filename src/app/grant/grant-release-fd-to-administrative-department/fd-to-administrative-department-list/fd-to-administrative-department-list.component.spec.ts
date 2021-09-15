import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdToAdministrativeDepartmentListComponent } from './fd-to-administrative-department-list.component';

describe('FdToAdministrativeDepartmentListComponent', () => {
  let component: FdToAdministrativeDepartmentListComponent;
  let fixture: ComponentFixture<FdToAdministrativeDepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdToAdministrativeDepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdToAdministrativeDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
