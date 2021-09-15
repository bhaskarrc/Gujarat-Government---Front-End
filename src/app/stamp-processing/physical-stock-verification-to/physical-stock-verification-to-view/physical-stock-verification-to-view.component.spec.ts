import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationToViewComponent } from './physical-stock-verification-to-view.component';

describe('PhysicalStockVerificationToViewComponent', () => {
  let component: PhysicalStockVerificationToViewComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
