import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIfscListingComponent } from './add-ifsc-listing.component';

describe('AddIfscListingComponent', () => {
  let component: AddIfscListingComponent;
  let fixture: ComponentFixture<AddIfscListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIfscListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIfscListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
