import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedWithdrawalCasesAccoutOfficerComponent } from './nps-received-withdrawal-cases-accout-officer.component';

describe('NpsReceivedWithdrawalCasesAccoutOfficerComponent', () => {
  let component: NpsReceivedWithdrawalCasesAccoutOfficerComponent;
  let fixture: ComponentFixture<NpsReceivedWithdrawalCasesAccoutOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedWithdrawalCasesAccoutOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedWithdrawalCasesAccoutOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
