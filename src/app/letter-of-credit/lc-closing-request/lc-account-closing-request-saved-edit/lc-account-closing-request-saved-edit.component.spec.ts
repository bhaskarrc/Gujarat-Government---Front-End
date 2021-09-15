import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestSavedEditComponent } from './lc-account-closing-request-saved-edit.component';

describe('LcAccountClosingRequestSavedEditComponent', () => {
  let component: LcAccountClosingRequestSavedEditComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestSavedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestSavedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestSavedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
