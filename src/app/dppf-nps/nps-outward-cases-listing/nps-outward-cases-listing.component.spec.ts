import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsOutwardCasesListingComponent } from './nps-outward-cases-listing.component';

describe('NpsOutwardCasesListingComponent', () => {
  let component: NpsOutwardCasesListingComponent;
  let fixture: ComponentFixture<NpsOutwardCasesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsOutwardCasesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsOutwardCasesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
