import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryBillCvpComponent } from './supplementary-bill-cvp.component';

describe('SupplementaryBillCvpComponent', () => {
  let component: SupplementaryBillCvpComponent;
  let fixture: ComponentFixture<SupplementaryBillCvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryBillCvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryBillCvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
