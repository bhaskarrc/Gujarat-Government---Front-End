import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsSentWithdrawalCasesSubAccoutantComponent } from './nps-sent-withdrawal-cases-sub-accoutant.component';

describe('NpsSentWithdrawalCasesSubAccoutantComponent', () => {
  let component: NpsSentWithdrawalCasesSubAccoutantComponent;
  let fixture: ComponentFixture<NpsSentWithdrawalCasesSubAccoutantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsSentWithdrawalCasesSubAccoutantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsSentWithdrawalCasesSubAccoutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
