import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrParaEntryComponent } from './lr-para-entry.component';

describe('LrParaEntryComponent', () => {
  let component: LrParaEntryComponent;
  let fixture: ComponentFixture<LrParaEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrParaEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrParaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
