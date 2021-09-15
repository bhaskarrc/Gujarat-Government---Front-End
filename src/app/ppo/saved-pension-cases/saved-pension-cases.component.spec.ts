import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPensionCasesComponent } from './saved-pension-cases.component';

describe('SavedPensionCasesComponent', () => {
  let component: SavedPensionCasesComponent;
  let fixture: ComponentFixture<SavedPensionCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPensionCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPensionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
