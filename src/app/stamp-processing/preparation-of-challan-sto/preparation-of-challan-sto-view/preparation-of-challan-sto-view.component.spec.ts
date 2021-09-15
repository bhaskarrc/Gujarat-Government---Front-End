import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanStoViewComponent } from './preparation-of-challan-sto-view.component';

describe('PreparationOfChallanStoViewComponent', () => {
  let component: PreparationOfChallanStoViewComponent;
  let fixture: ComponentFixture<PreparationOfChallanStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
