import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressConsolidateListComponent } from './work-in-progress-consolidate-list.component';

describe('WorkInProgressConsolidateListComponent', () => {
  let component: WorkInProgressConsolidateListComponent;
  let fixture: ComponentFixture<WorkInProgressConsolidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInProgressConsolidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInProgressConsolidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
