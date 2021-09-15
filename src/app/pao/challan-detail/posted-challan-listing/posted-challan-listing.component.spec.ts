import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListingComponent } from './posted-challan-listing.component';

describe('PostedChallanListingComponent', () => {
  let component: PostedChallanListingComponent;
  let fixture: ComponentFixture<PostedChallanListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
