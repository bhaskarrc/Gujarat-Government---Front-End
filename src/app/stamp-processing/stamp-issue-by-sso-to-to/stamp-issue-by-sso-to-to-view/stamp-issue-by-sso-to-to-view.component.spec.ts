import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueBySsoToToViewComponent } from './stamp-issue-by-sso-to-to-view.component';

describe('StampIssueBySsoToToViewComponent', () => {
  let component: StampIssueBySsoToToViewComponent;
  let fixture: ComponentFixture<StampIssueBySsoToToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueBySsoToToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueBySsoToToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
