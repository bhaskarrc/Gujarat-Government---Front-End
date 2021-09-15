import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPvuApproverComponent } from './events-pvu-approver.component';

describe('EventsPvuApproverComponent', () => {
  let component: EventsPvuApproverComponent;
  let fixture: ComponentFixture<EventsPvuApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPvuApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPvuApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
