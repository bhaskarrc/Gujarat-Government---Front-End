import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsSentWithdrawalCasesAccoutantComponent } from './nps-sent-withdrawal-cases-accoutant.component';

describe('NpsSentWithdrawalCasesAccoutantComponent', () => {
  let component: NpsSentWithdrawalCasesAccoutantComponent;
  let fixture: ComponentFixture<NpsSentWithdrawalCasesAccoutantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsSentWithdrawalCasesAccoutantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsSentWithdrawalCasesAccoutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
