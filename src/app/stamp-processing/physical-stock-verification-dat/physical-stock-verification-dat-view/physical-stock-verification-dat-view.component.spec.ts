import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationDatViewComponent } from './physical-stock-verification-dat-view.component';

describe('PhysicalStockVerificationDatViewComponent', () => {
  let component: PhysicalStockVerificationDatViewComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationDatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationDatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationDatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
