import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationStoListComponent } from './cancel-challan-authorization-sto-list.component';

describe('CancelChallanAuthorizationStoListComponent', () => {
  let component: CancelChallanAuthorizationStoListComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
