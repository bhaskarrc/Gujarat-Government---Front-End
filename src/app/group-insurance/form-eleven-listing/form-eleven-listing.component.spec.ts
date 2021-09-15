import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElevenListingComponent } from './form-eleven-listing.component';

describe('FormElevenListingComponent', () => {
  let component: FormElevenListingComponent;
  let fixture: ComponentFixture<FormElevenListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElevenListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElevenListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
