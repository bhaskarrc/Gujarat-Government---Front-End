import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantAnnexureOneListingComponent } from './grant-annexure-one-listing.component';

describe('GrantAnnexureOneListingComponent', () => {
  let component: GrantAnnexureOneListingComponent;
  let fixture: ComponentFixture<GrantAnnexureOneListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantAnnexureOneListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAnnexureOneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
