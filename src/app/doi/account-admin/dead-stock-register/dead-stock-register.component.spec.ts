import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadStockRegisterComponent } from './dead-stock-register.component';

describe('DeadStockRegisterComponent', () => {
  let component: DeadStockRegisterComponent;
  let fixture: ComponentFixture<DeadStockRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadStockRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadStockRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
