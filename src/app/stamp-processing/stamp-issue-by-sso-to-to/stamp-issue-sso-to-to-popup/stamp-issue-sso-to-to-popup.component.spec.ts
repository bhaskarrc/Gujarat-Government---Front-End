import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueSsoToToPopupComponent } from './stamp-issue-sso-to-to-popup.component';

describe('StampIssueSsoToToPopupComponent', () => {
  let component: StampIssueSsoToToPopupComponent;
  let fixture: ComponentFixture<StampIssueSsoToToPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueSsoToToPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueSsoToToPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
