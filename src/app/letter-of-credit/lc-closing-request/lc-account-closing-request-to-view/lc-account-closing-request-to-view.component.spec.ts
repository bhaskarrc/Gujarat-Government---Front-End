import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestToViewComponent } from './lc-account-closing-request-to-view.component';

describe('LcAccountClosingRequestToViewComponent', () => {
  let component: LcAccountClosingRequestToViewComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
