import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPensionCaseEntryComponent } from './admin-pension-case-entry.component';

describe('AdminPensionCaseEntryComponent', () => {
  let component: AdminPensionCaseEntryComponent;
  let fixture: ComponentFixture<AdminPensionCaseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPensionCaseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPensionCaseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
