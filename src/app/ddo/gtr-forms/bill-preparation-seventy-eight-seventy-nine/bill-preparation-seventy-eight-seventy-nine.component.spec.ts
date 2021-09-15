import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreparationSeventyEightSeventyNineComponent } from './bill-preparation-seventy-eight-seventy-nine.component';

describe('BillPreparationSeventyEightSeventyNineComponent', () => {
  let component: BillPreparationSeventyEightSeventyNineComponent;
  let fixture: ComponentFixture<BillPreparationSeventyEightSeventyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreparationSeventyEightSeventyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreparationSeventyEightSeventyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
