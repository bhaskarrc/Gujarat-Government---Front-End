import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueStoListComponent } from './revert-stamp-issue-sto-list.component';

describe('RevertStampIssueStoListComponent', () => {
  let component: RevertStampIssueStoListComponent;
  let fixture: ComponentFixture<RevertStampIssueStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
