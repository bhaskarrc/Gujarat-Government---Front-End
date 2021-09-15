import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanReAssignmentComponent } from './challan-re-assignment.component';

describe('ChallanReAssignmentComponent', () => {
  let component: ChallanReAssignmentComponent;
  let fixture: ComponentFixture<ChallanReAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanReAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanReAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
