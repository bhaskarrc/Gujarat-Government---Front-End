import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDirectorSavedCasesComponent } from './dy-director-saved-cases.component';

describe('DyDirectorSavedCasesComponent', () => {
  let component: DyDirectorSavedCasesComponent;
  let fixture: ComponentFixture<DyDirectorSavedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyDirectorSavedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyDirectorSavedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
