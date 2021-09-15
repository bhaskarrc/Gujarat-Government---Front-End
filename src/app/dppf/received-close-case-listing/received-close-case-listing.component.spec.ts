import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCloseCaseListingComponent } from './received-close-case-listing.component';

describe('ReceivedCloseCaseListingComponent', () => {
  let component: ReceivedCloseCaseListingComponent;
  let fixture: ComponentFixture<ReceivedCloseCaseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedCloseCaseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedCloseCaseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
