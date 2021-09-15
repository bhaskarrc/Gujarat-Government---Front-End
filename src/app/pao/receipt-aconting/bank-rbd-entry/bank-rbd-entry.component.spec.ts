import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRbdEntryComponent } from './bank-rbd-entry.component';

describe('BankRbdEntryComponent', () => {
  let component: BankRbdEntryComponent;
  let fixture: ComponentFixture<BankRbdEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRbdEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRbdEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
