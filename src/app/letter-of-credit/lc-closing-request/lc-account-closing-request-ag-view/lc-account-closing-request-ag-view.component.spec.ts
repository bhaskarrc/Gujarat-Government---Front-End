import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestAgViewComponent } from './lc-account-closing-request-ag-view.component';

describe('LcAccountClosingRequestAgViewComponent', () => {
  let component: LcAccountClosingRequestAgViewComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestAgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestAgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestAgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
