import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsSentWithdrawalCasesComponent } from './nps-sent-withdrawal-cases.component';

describe('NpsSentWithdrawalCasesComponent', () => {
  let component: NpsSentWithdrawalCasesComponent;
  let fixture: ComponentFixture<NpsSentWithdrawalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsSentWithdrawalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsSentWithdrawalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
