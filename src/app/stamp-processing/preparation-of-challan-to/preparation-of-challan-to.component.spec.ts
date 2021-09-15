import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationOfChallanToComponent } from './preparation-of-challan-to.component';

describe('PreparationOfChallanToComponent', () => {
  let component: PreparationOfChallanToComponent;
  let fixture: ComponentFixture<PreparationOfChallanToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationOfChallanToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationOfChallanToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
