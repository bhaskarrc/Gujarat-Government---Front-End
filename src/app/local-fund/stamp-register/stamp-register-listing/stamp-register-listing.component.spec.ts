import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampRegisterListingComponent } from './stamp-register-listing.component';

describe('StampRegisterListingComponent', () => {
  let component: StampRegisterListingComponent;
  let fixture: ComponentFixture<StampRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
