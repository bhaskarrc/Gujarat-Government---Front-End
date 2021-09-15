import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAgDataListingComponent } from './gi-ag-data-listing.component';

describe('GiAgDataListingComponent', () => {
  let component: GiAgDataListingComponent;
  let fixture: ComponentFixture<GiAgDataListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAgDataListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAgDataListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
