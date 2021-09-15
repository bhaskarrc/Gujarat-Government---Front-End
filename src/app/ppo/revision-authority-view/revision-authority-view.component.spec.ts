import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionAuthorityViewComponent } from './revision-authority-view.component';

describe('RevisionAuthorityViewComponent', () => {
  let component: RevisionAuthorityViewComponent;
  let fixture: ComponentFixture<RevisionAuthorityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionAuthorityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionAuthorityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
