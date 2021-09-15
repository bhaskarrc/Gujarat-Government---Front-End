import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeMasterComponent } from './gi-employee-master.component';

describe('GiEmployeeMasterComponent', () => {
  let component: GiEmployeeMasterComponent;
  let fixture: ComponentFixture<GiEmployeeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
