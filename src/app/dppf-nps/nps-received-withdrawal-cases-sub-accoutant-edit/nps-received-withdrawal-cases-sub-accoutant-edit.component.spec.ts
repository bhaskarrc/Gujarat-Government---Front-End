import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedWithdrawalCasesSubAccoutantEditComponent } from './nps-received-withdrawal-cases-sub-accoutant-edit.component';

describe('NpsReceivedWithdrawalCasesSubAccoutantEditComponent', () => {
  let component: NpsReceivedWithdrawalCasesSubAccoutantEditComponent;
  let fixture: ComponentFixture<NpsReceivedWithdrawalCasesSubAccoutantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedWithdrawalCasesSubAccoutantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedWithdrawalCasesSubAccoutantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
