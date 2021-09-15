import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryBillDcrgComponent } from './supplementary-bill-dcrg.component';

describe('SupplementaryBillDcrgComponent', () => {
  let component: SupplementaryBillDcrgComponent;
  let fixture: ComponentFixture<SupplementaryBillDcrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryBillDcrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryBillDcrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
