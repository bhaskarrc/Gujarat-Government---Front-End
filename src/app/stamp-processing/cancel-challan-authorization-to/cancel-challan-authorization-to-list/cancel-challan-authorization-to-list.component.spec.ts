import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelChallanAuthorizationToListComponent } from './cancel-challan-authorization-to-list.component';

describe('CancelChallanAuthorizationToListComponent', () => {
  let component: CancelChallanAuthorizationToListComponent;
  let fixture: ComponentFixture<CancelChallanAuthorizationToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelChallanAuthorizationToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelChallanAuthorizationToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
