import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryDetailsListingComponent } from './recovery-details-listing.component';

describe('RecoveryDetailsListingComponent', () => {
  let component: RecoveryDetailsListingComponent;
  let fixture: ComponentFixture<RecoveryDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
