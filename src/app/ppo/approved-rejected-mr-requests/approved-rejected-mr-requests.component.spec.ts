import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRejectedMrRequestsComponent } from './approved-rejected-mr-requests.component';

describe('ApprovedRejectedMrRequestsComponent', () => {
  let component: ApprovedRejectedMrRequestsComponent;
  let fixture: ComponentFixture<ApprovedRejectedMrRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRejectedMrRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedRejectedMrRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
