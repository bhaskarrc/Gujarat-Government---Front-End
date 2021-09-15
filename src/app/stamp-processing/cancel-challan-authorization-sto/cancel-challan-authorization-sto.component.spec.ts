import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationStoComponent } from './cancel-challan-authorization-sto.component';

describe('CancelChallanAuthorizationStoComponent', () => {
  let component: CancelChallanAuthorizationStoComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
