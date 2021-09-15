import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationToComponent } from './physical-stock-verification-to.component';

describe('PhysicalStockVerificationToComponent', () => {
  let component: PhysicalStockVerificationToComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
