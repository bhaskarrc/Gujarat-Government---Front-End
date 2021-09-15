import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestToEditComponent } from './lc-account-closing-request-to-edit.component';

describe('LcAccountClosingRequestToEditComponent', () => {
  let component: LcAccountClosingRequestToEditComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
