import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAcceptAccountFromTreasuryComponent } from './gi-accept-account-from-treasury.component';

describe('GiAcceptAccountFromTreasuryComponent', () => {
  let component: GiAcceptAccountFromTreasuryComponent;
  let fixture: ComponentFixture<GiAcceptAccountFromTreasuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAcceptAccountFromTreasuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAcceptAccountFromTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
