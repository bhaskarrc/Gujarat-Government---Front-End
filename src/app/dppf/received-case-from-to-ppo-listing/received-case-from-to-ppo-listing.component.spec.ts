import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCaseFromToPpoListingComponent } from './received-case-from-to-ppo-listing.component';

describe('ReceivedCaseFromToPpoListingComponent', () => {
  let component: ReceivedCaseFromToPpoListingComponent;
  let fixture: ComponentFixture<ReceivedCaseFromToPpoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedCaseFromToPpoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedCaseFromToPpoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
