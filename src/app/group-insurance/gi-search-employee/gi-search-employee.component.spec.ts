import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiSearchEmployeeComponent } from './gi-search-employee.component';

describe('GiSearchEmployeeComponent', () => {
  let component: GiSearchEmployeeComponent;
  let fixture: ComponentFixture<GiSearchEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiSearchEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiSearchEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
