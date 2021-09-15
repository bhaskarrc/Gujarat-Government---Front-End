import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreparationFormComponent } from './bill-preparation-form.component';

describe('BillPreparationFormComponent', () => {
  let component: BillPreparationFormComponent;
  let fixture: ComponentFixture<BillPreparationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreparationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreparationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
