import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressConsolidateViewComponent } from './work-in-progress-consolidate-view.component';

describe('WorkInProgressConsolidateViewComponent', () => {
  let component: WorkInProgressConsolidateViewComponent;
  let fixture: ComponentFixture<WorkInProgressConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInProgressConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInProgressConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
