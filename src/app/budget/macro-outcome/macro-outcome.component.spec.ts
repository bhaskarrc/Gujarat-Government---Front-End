import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroOutcomeComponent } from './macro-outcome.component';

describe('MacroOutcomeComponent', () => {
  let component: MacroOutcomeComponent;
  let fixture: ComponentFixture<MacroOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
