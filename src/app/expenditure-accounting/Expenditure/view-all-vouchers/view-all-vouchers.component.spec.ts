import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVouchersComponent } from './view-all-vouchers.component';

describe('ViewAllVouchersComponent', () => {
  let component: ViewAllVouchersComponent;
  let fixture: ComponentFixture<ViewAllVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
