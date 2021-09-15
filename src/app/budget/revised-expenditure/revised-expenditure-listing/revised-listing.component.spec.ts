import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedListingComponent } from './revised-listing.component';

describe('RevisedListingComponent', () => {
  let component: RevisedListingComponent;
  let fixture: ComponentFixture<RevisedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
