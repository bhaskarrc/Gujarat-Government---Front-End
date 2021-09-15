import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePrintingGenerateChequeComponent } from './cheque-printing-generate-cheque.component';

describe('ChequePrintingGenerateChequeComponent', () => {
  let component: ChequePrintingGenerateChequeComponent;
  let fixture: ComponentFixture<ChequePrintingGenerateChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePrintingGenerateChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePrintingGenerateChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
