import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPostedVouchersComponent } from './ex-posted-vouchers.component';

describe('ExPostedVouchersComponent', () => {
  let component: ExPostedVouchersComponent;
  let fixture: ComponentFixture<ExPostedVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExPostedVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExPostedVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
