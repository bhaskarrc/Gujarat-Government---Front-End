import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanToViewComponent } from './preparation-of-challan-to-view.component';

describe('PreparationOfChallanToViewComponent', () => {
  let component: PreparationOfChallanToViewComponent;
  let fixture: ComponentFixture<PreparationOfChallanToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
