import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChequebookActivateInactivateToComponent } from './lc-chequebook-activate-inactivate-to.component';

describe('LcChequebookActivateInactivateToComponent', () => {
  let component: LcChequebookActivateInactivateToComponent;
  let fixture: ComponentFixture<LcChequebookActivateInactivateToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChequebookActivateInactivateToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChequebookActivateInactivateToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
