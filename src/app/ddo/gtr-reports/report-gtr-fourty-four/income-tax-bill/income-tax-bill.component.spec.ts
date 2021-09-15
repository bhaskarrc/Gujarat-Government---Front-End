import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxBillComponent } from './income-tax-bill.component';

describe('IncomeTaxBillComponent', () => {
  let component: IncomeTaxBillComponent;
  let fixture: ComponentFixture<IncomeTaxBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTaxBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
