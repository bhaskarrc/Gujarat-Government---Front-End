import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogBoxComponent } from './employee-dialog-box.component';

describe('EmployeeDialogBoxComponent', () => {
  let component: EmployeeDialogBoxComponent;
  let fixture: ComponentFixture<EmployeeDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
