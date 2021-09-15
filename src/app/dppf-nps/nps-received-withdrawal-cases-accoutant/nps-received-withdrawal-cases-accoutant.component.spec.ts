import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedWithdrawalCasesAccoutantComponent } from './nps-received-withdrawal-cases-accoutant.component';

describe('NpsReceivedWithdrawalCasesAccoutantComponent', () => {
  let component: NpsReceivedWithdrawalCasesAccoutantComponent;
  let fixture: ComponentFixture<NpsReceivedWithdrawalCasesAccoutantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedWithdrawalCasesAccoutantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedWithdrawalCasesAccoutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
