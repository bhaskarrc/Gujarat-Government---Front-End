import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillForCorrectionComponent } from './bill-for-correction.component';

describe('BillForCorrectionComponent', () => {
  let component: BillForCorrectionComponent;
  let fixture: ComponentFixture<BillForCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillForCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillForCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
