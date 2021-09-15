import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorSavedCasesComponent } from './auditor-saved-cases.component';

describe('AuditorSavedCasesComponent', () => {
  let component: AuditorSavedCasesComponent;
  let fixture: ComponentFixture<AuditorSavedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorSavedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorSavedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
