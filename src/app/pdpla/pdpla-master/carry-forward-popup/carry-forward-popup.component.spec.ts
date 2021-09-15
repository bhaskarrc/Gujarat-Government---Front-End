import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryForwardPopupComponent } from './carry-forward-popup.component';

describe('CarryForwardPopupComponent', () => {
  let component: CarryForwardPopupComponent;
  let fixture: ComponentFixture<CarryForwardPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryForwardPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryForwardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
