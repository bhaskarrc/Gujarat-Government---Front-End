import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChequebookListingToViewComponent } from './lc-chequebook-listing-to-view.component';

describe('LcChequebookListingToViewComponent', () => {
  let component: LcChequebookListingToViewComponent;
  let fixture: ComponentFixture<LcChequebookListingToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChequebookListingToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChequebookListingToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
