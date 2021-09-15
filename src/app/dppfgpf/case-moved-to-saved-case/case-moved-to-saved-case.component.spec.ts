import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMovedToSavedCaseComponent } from './case-moved-to-saved-case.component';

describe('CaseMovedToSavedCaseComponent', () => {
  let component: CaseMovedToSavedCaseComponent;
  let fixture: ComponentFixture<CaseMovedToSavedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseMovedToSavedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseMovedToSavedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
