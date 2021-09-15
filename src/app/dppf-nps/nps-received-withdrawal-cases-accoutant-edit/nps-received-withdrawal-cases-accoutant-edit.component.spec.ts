import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReceivedWithdrawalCasesAccoutantEditComponent } from './nps-received-withdrawal-cases-accoutant-edit.component';

describe('NpsReceivedWithdrawalCasesAccoutantEditComponent', () => {
  let component: NpsReceivedWithdrawalCasesAccoutantEditComponent;
  let fixture: ComponentFixture<NpsReceivedWithdrawalCasesAccoutantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsReceivedWithdrawalCasesAccoutantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsReceivedWithdrawalCasesAccoutantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
