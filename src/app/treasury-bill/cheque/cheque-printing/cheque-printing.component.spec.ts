import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePrintingComponent } from './cheque-printing.component';

describe('ChequePrintingComponent', () => {
  let component: ChequePrintingComponent;
  let fixture: ComponentFixture<ChequePrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
