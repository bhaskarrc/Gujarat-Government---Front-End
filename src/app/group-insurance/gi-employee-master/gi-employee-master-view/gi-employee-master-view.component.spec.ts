import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeMasterViewComponent } from './gi-employee-master-view.component';

describe('GiEmployeeMasterViewComponent', () => {
  let component: GiEmployeeMasterViewComponent;
  let fixture: ComponentFixture<GiEmployeeMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
