import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverEventViewComponent } from './approver-event-view.component';

describe('ApproverEventViewComponent', () => {
  let component: ApproverEventViewComponent;
  let fixture: ComponentFixture<ApproverEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
