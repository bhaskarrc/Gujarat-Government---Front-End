import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsSavedWithdrawalCasesComponent } from './nps-saved-withdrawal-cases.component';

describe('NpsSavedWithdrawalCasesComponent', () => {
  let component: NpsSavedWithdrawalCasesComponent;
  let fixture: ComponentFixture<NpsSavedWithdrawalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsSavedWithdrawalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsSavedWithdrawalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
