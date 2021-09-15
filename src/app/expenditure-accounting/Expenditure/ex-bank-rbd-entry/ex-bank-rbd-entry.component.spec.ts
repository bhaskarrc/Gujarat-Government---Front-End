import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBankRbdEntryComponent } from './ex-bank-rbd-entry.component';

describe('ExBankRbdEntryComponent', () => {
  let component: ExBankRbdEntryComponent;
  let fixture: ComponentFixture<ExBankRbdEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExBankRbdEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExBankRbdEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
