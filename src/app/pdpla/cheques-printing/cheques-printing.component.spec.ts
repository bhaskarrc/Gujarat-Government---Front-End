import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesPrintingComponent } from './cheques-printing.component';

describe('ChequesPrintingComponent', () => {
  let component: ChequesPrintingComponent;
  let fixture: ComponentFixture<ChequesPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequesPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
