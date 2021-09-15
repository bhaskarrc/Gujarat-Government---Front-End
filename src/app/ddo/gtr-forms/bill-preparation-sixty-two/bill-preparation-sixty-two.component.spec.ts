import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreparationSixtyTwoComponent } from './bill-preparation-sixty-two.component';

describe('BillPreparationSixtyTwoComponent', () => {
  let component: BillPreparationSixtyTwoComponent;
  let fixture: ComponentFixture<BillPreparationSixtyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreparationSixtyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreparationSixtyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
