import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationDatListComponent } from './physical-stock-verification-dat-list.component';

describe('PhysicalStockVerificationDatListComponent', () => {
  let component: PhysicalStockVerificationDatListComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationDatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationDatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationDatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
