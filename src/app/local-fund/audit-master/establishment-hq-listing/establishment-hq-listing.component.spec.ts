import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentHqListingComponent } from './establishment-hq-listing.component';

describe('EstablishmentHqListingComponent', () => {
  let component: EstablishmentHqListingComponent;
  let fixture: ComponentFixture<EstablishmentHqListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentHqListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentHqListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
