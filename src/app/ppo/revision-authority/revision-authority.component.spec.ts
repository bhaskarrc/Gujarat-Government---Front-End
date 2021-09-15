import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionAuthorityComponent } from './revision-authority.component';

describe('RevisionAuthorityComponent', () => {
  let component: RevisionAuthorityComponent;
  let fixture: ComponentFixture<RevisionAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
