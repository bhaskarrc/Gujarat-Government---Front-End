import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueStoViewComponent } from './revert-stamp-issue-sto-view.component';

describe('RevertStampIssueStoViewComponent', () => {
  let component: RevertStampIssueStoViewComponent;
  let fixture: ComponentFixture<RevertStampIssueStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
