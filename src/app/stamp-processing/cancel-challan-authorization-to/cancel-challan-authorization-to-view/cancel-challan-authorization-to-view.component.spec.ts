import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationToViewComponent } from './cancel-challan-authorization-to-view.component';

describe('CancelChallanAuthorizationToViewComponent', () => {
  let component: CancelChallanAuthorizationToViewComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
