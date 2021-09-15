import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceViewStatusComponent } from './grievance-view-status.component';

describe('GrievanceViewStatusComponent', () => {
  let component: GrievanceViewStatusComponent;
  let fixture: ComponentFixture<GrievanceViewStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceViewStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceViewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
