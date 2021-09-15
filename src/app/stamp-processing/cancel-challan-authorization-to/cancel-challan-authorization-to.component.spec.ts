import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationToComponent } from './cancel-challan-authorization-to.component';

describe('CancelChallanAuthorizationToComponent', () => {
  let component: CancelChallanAuthorizationToComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
