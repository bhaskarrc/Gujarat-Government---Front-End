import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedprocessListingComponent } from './savedprocess-listing.component';

describe('SavedprocessListingComponent', () => {
  let component: SavedprocessListingComponent;
  let fixture: ComponentFixture<SavedprocessListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedprocessListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedprocessListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
