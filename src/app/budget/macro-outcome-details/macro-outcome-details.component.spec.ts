import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroOutcomeDetailsComponent } from './macro-outcome-details.component';

describe('MacroOutcomeDetailsComponent', () => {
  let component: MacroOutcomeDetailsComponent;
  let fixture: ComponentFixture<MacroOutcomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroOutcomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroOutcomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
