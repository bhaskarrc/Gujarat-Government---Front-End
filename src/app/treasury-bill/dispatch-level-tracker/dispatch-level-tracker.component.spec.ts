import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchLevelTrackerComponent } from './dispatch-level-tracker.component';

describe('DispatchLevelTrackerComponent', () => {
  let component: DispatchLevelTrackerComponent;
  let fixture: ComponentFixture<DispatchLevelTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchLevelTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchLevelTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
