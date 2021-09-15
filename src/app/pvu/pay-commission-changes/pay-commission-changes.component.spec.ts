import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCommissionChangesComponent } from './pay-commission-changes.component';

describe('PayCommissionChangesComponent', () => {
  let component: PayCommissionChangesComponent;
  let fixture: ComponentFixture<PayCommissionChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCommissionChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCommissionChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
