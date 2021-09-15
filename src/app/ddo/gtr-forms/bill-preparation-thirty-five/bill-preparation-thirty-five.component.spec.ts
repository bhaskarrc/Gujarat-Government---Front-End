import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreparationThirtyFiveComponent } from './bill-preparation-thirty-five.component';

describe('BillPreparationThirtyFiveComponent', () => {
  let component: BillPreparationThirtyFiveComponent;
  let fixture: ComponentFixture<BillPreparationThirtyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreparationThirtyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreparationThirtyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
