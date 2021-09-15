import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestAgComponent } from './lc-account-closing-request-ag.component';

describe('LcAccountClosingRequestAgComponent', () => {
  let component: LcAccountClosingRequestAgComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestAgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestAgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
