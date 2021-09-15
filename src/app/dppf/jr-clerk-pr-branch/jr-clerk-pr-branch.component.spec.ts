import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrClerkPrBranchComponent } from './jr-clerk-pr-branch.component';

describe('JrClerkPrBranchComponent', () => {
  let component: JrClerkPrBranchComponent;
  let fixture: ComponentFixture<JrClerkPrBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrClerkPrBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrClerkPrBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
