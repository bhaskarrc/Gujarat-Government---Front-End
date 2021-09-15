import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaDifferenceListingComponent } from './da-difference-listing.component';

describe('DaDifferenceListingComponent', () => {
  let component: DaDifferenceListingComponent;
  let fixture: ComponentFixture<DaDifferenceListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaDifferenceListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaDifferenceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
