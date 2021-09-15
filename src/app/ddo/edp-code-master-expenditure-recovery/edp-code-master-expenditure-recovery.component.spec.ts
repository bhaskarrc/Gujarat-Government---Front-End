import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpCodeMasterExpenditureRecoveryComponent } from './edp-code-master-expenditure-recovery.component';

describe('EdpCodeMasterExpenditureRecoveryComponent', () => {
  let component: EdpCodeMasterExpenditureRecoveryComponent;
  let fixture: ComponentFixture<EdpCodeMasterExpenditureRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpCodeMasterExpenditureRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpCodeMasterExpenditureRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
