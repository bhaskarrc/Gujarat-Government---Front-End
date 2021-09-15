import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateModeAoListingComponent } from './generate-mode-ao-listing.component';

describe('GenerateModeAoListingComponent', () => {
  let component: GenerateModeAoListingComponent;
  let fixture: ComponentFixture<GenerateModeAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateModeAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateModeAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
