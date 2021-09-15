import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueBySsoToToComponent } from './stamp-issue-by-sso-to-to.component';

describe('StampIssueBySsoToToComponent', () => {
  let component: StampIssueBySsoToToComponent;
  let fixture: ComponentFixture<StampIssueBySsoToToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueBySsoToToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueBySsoToToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
