import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcrgBillComponent } from './dcrg-bill.component';

describe('DcrgBillComponent', () => {
  let component: DcrgBillComponent;
  let fixture: ComponentFixture<DcrgBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcrgBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcrgBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
