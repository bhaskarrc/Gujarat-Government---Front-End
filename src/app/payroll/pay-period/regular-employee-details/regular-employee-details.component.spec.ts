import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularEmployeeDetailsComponent } from './regular-employee-details.component';

describe('RegularEmployeeDetailsComponent', () => {
  let component: RegularEmployeeDetailsComponent;
  let fixture: ComponentFixture<RegularEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
