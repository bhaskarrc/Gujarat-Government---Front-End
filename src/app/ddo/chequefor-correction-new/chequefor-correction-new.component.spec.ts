import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeforCorrectionNewComponent } from './chequefor-correction-new.component';

describe('ChequeforCorrectionNewComponent', () => {
  let component: ChequeforCorrectionNewComponent;
  let fixture: ComponentFixture<ChequeforCorrectionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeforCorrectionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeforCorrectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
