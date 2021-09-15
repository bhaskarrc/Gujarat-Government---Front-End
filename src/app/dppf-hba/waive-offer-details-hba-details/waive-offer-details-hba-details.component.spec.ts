import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveOfferDetailsHbaDetailsComponent } from './waive-offer-details-hba-details.component';

describe('WaiveOfferDetailsHbaDetailsComponent', () => {
  let component: WaiveOfferDetailsHbaDetailsComponent;
  let fixture: ComponentFixture<WaiveOfferDetailsHbaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiveOfferDetailsHbaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveOfferDetailsHbaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
