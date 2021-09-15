import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreparationEightyFiveEightyFiveOtherComponent } from './bill-preparation-eighty-five-eighty-five-other.component';

describe('BillPreparationEightyFiveEightyFiveOtherComponent', () => {
  let component: BillPreparationEightyFiveEightyFiveOtherComponent;
  let fixture: ComponentFixture<BillPreparationEightyFiveEightyFiveOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreparationEightyFiveEightyFiveOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreparationEightyFiveEightyFiveOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
