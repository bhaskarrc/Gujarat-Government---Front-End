import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorSavedCasesComponent } from './director-saved-cases.component';

describe('DirectorSavedCasesComponent', () => {
  let component: DirectorSavedCasesComponent;
  let fixture: ComponentFixture<DirectorSavedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorSavedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSavedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
