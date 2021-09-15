import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceViewFormComponent } from './grievance-view-form.component';

describe('GrievanceViewFormComponent', () => {
  let component: GrievanceViewFormComponent;
  let fixture: ComponentFixture<GrievanceViewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceViewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
