import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SloDepartmentPostmasterComponent } from './slo-department-postmaster.component';

describe('SloDepartmentPostmasterComponent', () => {
  let component: SloDepartmentPostmasterComponent;
  let fixture: ComponentFixture<SloDepartmentPostmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SloDepartmentPostmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SloDepartmentPostmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
