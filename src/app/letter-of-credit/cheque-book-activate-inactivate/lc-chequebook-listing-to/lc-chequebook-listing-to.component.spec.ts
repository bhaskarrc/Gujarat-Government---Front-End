import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChequebookListingToComponent } from './lc-chequebook-listing-to.component';

describe('LcChequebookListingToComponent', () => {
  let component: LcChequebookListingToComponent;
  let fixture: ComponentFixture<LcChequebookListingToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChequebookListingToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChequebookListingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
