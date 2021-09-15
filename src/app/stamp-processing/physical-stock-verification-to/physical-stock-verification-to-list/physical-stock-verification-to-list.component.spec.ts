import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockVerificationToListComponent } from './physical-stock-verification-to-list.component';

describe('PhysicalStockVerificationToListComponent', () => {
  let component: PhysicalStockVerificationToListComponent;
  let fixture: ComponentFixture<PhysicalStockVerificationToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalStockVerificationToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalStockVerificationToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
