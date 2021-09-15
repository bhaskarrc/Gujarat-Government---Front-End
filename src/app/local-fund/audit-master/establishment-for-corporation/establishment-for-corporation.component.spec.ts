import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentForCorporationComponent } from './establishment-for-corporation.component';

describe('EstablishmentForCorporationComponent', () => {
  let component: EstablishmentForCorporationComponent;
  let fixture: ComponentFixture<EstablishmentForCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentForCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentForCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
