import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeforCorrectionComponent } from './chequefor-correction.component';

describe('ChequeforCorrectionComponent', () => {
  let component: ChequeforCorrectionComponent;
  let fixture: ComponentFixture<ChequeforCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeforCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeforCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
