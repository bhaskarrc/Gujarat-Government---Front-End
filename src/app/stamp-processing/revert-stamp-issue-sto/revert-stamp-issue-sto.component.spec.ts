import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueStoComponent } from './revert-stamp-issue-sto.component';

describe('RevertStampIssueStoComponent', () => {
  let component: RevertStampIssueStoComponent;
  let fixture: ComponentFixture<RevertStampIssueStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
