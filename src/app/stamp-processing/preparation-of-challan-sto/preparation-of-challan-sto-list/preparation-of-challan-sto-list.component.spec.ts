import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanStoListComponent } from './preparation-of-challan-sto-list.component';

describe('PreparationOfChallanStoListComponent', () => {
  let component: PreparationOfChallanStoListComponent;
  let fixture: ComponentFixture<PreparationOfChallanStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
