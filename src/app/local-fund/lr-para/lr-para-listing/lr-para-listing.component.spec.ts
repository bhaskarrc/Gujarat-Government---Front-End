import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrParaListingComponent } from './lr-para-listing.component';

describe('LrParaListingComponent', () => {
  let component: LrParaListingComponent;
  let fixture: ComponentFixture<LrParaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrParaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrParaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
