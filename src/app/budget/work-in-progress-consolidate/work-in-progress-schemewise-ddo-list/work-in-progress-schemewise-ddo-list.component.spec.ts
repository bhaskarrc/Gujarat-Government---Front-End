import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressSchemewiseDdoListComponent } from './work-in-progress-schemewise-ddo-list.component';

describe('WorkInProgressSchemewiseDdoListComponent', () => {
  let component: WorkInProgressSchemewiseDdoListComponent;
  let fixture: ComponentFixture<WorkInProgressSchemewiseDdoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInProgressSchemewiseDdoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInProgressSchemewiseDdoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
