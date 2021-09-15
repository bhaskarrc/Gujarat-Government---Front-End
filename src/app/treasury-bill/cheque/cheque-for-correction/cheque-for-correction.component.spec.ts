import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeForCorrectionComponent } from './cheque-for-correction.component';

describe('ChequeForCorrectionComponent', () => {
  let component: ChequeForCorrectionComponent;
  let fixture: ComponentFixture<ChequeForCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeForCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeForCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
