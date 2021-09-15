import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeDepartmentComponent } from './administrative-department.component';

describe('FreezeUnfreezeBudgetCeilingComponent', () => {
  let component: AdministrativeDepartmentComponent;
  let fixture: ComponentFixture<AdministrativeDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
