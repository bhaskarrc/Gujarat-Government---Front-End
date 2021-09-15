import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsSentWithdrawalCasesAccoutOfficerComponent } from './nps-sent-withdrawal-cases-accout-officer.component';

describe('NpsSentWithdrawalCasesAccoutOfficerComponent', () => {
  let component: NpsSentWithdrawalCasesAccoutOfficerComponent;
  let fixture: ComponentFixture<NpsSentWithdrawalCasesAccoutOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsSentWithdrawalCasesAccoutOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsSentWithdrawalCasesAccoutOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
