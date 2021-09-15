import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationDATComponent } from './physical-stock-verification-dat.component';

describe('PhysicalStockVerificationDATComponent', () => {
  let component: PhysicalStockVerificationDATComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationDATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationDATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationDATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
