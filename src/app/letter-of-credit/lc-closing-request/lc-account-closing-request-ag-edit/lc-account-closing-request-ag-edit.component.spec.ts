import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAccountClosingRequestAgEditComponent } from './lc-account-closing-request-ag-edit.component';

describe('LcAccountClosingRequestAgEditComponent', () => {
  let component: LcAccountClosingRequestAgEditComponent;
  let fixture: ComponentFixture<LcAccountClosingRequestAgEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAccountClosingRequestAgEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAccountClosingRequestAgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
