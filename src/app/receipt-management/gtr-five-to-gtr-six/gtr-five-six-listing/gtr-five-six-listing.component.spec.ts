import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFiveSixListingComponent } from './gtr-five-six-listing.component';

describe('GtrFiveSixListingComponent', () => {
  let component: GtrFiveSixListingComponent;
  let fixture: ComponentFixture<GtrFiveSixListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFiveSixListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFiveSixListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
