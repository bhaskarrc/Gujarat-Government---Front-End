import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanStoComponent } from './preparation-of-challan-sto.component';

describe('PreparationOfChallanStoComponent', () => {
  let component: PreparationOfChallanStoComponent;
  let fixture: ComponentFixture<PreparationOfChallanStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
