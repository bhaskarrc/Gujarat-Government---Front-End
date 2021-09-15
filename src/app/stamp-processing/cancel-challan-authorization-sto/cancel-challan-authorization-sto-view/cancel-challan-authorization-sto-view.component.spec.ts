import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationStoViewComponent } from './cancel-challan-authorization-sto-view.component';

describe('CancelChallanAuthorizationStoViewComponent', () => {
  let component: CancelChallanAuthorizationStoViewComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
