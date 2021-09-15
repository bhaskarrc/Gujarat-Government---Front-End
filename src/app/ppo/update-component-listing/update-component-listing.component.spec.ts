import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponentListingComponent } from './update-component-listing.component';

describe('UpdateComponentListingComponent', () => {
  let component: UpdateComponentListingComponent;
  let fixture: ComponentFixture<UpdateComponentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
