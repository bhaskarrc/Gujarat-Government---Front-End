import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDetailsCommonPopupComponent } from './stamp-details-common-popup.component';

describe('StampDetailsCommonPopupComponent', () => {
  let component: StampDetailsCommonPopupComponent;
  let fixture: ComponentFixture<StampDetailsCommonPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDetailsCommonPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDetailsCommonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
