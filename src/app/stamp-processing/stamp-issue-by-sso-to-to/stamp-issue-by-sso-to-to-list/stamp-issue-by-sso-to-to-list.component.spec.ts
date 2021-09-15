import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueBySsoToToListComponent } from './stamp-issue-by-sso-to-to-list.component';

describe('StampIssueBySsoToToListComponent', () => {
  let component: StampIssueBySsoToToListComponent;
  let fixture: ComponentFixture<StampIssueBySsoToToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueBySsoToToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueBySsoToToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
