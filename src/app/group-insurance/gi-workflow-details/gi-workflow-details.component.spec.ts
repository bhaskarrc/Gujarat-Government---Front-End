import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiWorkflowDetailsComponent } from './gi-workflow-details.component';

describe('GiWorkflowDetailsComponent', () => {
  let component: GiWorkflowDetailsComponent;
  let fixture: ComponentFixture<GiWorkflowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiWorkflowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiWorkflowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
