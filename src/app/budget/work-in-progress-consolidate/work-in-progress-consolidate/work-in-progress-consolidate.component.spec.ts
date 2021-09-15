import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressConsolidateComponent } from './work-in-progress-consolidate.component';

describe('WorkInProgressConsolidateComponent', () => {
  let component: WorkInProgressConsolidateComponent;
  let fixture: ComponentFixture<WorkInProgressConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInProgressConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInProgressConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
