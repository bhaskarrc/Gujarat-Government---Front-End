import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwelveListingComponent } from './form-twelve-listing.component';

describe('FormTwelveListingComponent', () => {
  let component: FormTwelveListingComponent;
  let fixture: ComponentFixture<FormTwelveListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwelveListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwelveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
