import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateModeHaListingComponent } from './generate-mode-ha-listing.component';

describe('GenerateModeHaListingComponent', () => {
  let component: GenerateModeHaListingComponent;
  let fixture: ComponentFixture<GenerateModeHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateModeHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateModeHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
