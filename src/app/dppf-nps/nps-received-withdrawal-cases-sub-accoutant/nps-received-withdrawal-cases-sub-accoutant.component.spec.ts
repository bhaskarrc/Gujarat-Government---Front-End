import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedWithdrawalCasesSubAccoutantComponent } from './nps-received-withdrawal-cases-sub-accoutant.component';

describe('NpsReceivedWithdrawalCasesSubAccoutantComponent', () => {
  let component: NpsReceivedWithdrawalCasesSubAccoutantComponent;
  let fixture: ComponentFixture<NpsReceivedWithdrawalCasesSubAccoutantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedWithdrawalCasesSubAccoutantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedWithdrawalCasesSubAccoutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
