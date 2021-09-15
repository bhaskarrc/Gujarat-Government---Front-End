import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorEventViewComponent } from './auditor-event-view.component';

describe('AuditorEventViewComponent', () => {
  let component: AuditorEventViewComponent;
  let fixture: ComponentFixture<AuditorEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
