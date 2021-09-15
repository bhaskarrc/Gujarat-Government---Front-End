import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedChequeComponent } from './printed-cheque.component';

describe('PrintedChequeComponent', () => {
  let component: PrintedChequeComponent;
  let fixture: ComponentFixture<PrintedChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintedChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintedChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
