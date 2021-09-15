import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCommissionChangeListComponent } from './pay-commission-change-list.component';

describe('PayCommissionChangeListComponent', () => {
  let component: PayCommissionChangeListComponent;
  let fixture: ComponentFixture<PayCommissionChangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCommissionChangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCommissionChangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
