import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestToComponent } from './lc-account-closing-request-to.component';

describe('LcAccountClosingRequestToComponent', () => {
  let component: LcAccountClosingRequestToComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
