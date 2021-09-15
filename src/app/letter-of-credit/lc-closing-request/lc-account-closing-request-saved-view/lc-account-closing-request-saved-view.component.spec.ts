import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestSavedViewComponent } from './lc-account-closing-request-saved-view.component';

describe('LcAccountClosingRequestSavedViewComponent', () => {
  let component: LcAccountClosingRequestSavedViewComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestSavedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestSavedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestSavedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
