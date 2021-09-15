import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeforCorrectionListComponent } from './chequefor-correction-list.component';

describe('ChequeforCorrectionListComponent', () => {
  let component: ChequeforCorrectionListComponent;
  let fixture: ComponentFixture<ChequeforCorrectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeforCorrectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeforCorrectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
