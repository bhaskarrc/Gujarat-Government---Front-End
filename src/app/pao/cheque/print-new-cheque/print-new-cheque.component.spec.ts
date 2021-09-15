import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNewChequeComponent } from './print-new-cheque.component';

describe('PrintNewChequeComponent', () => {
  let component: PrintNewChequeComponent;
  let fixture: ComponentFixture<PrintNewChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintNewChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintNewChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
