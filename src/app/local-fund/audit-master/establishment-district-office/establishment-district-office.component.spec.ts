import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentDistrictOfficeComponent } from './establishment-district-office.component';

describe('EstablishmentDistrictOfficeComponent', () => {
  let component: EstablishmentDistrictOfficeComponent;
  let fixture: ComponentFixture<EstablishmentDistrictOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentDistrictOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentDistrictOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
