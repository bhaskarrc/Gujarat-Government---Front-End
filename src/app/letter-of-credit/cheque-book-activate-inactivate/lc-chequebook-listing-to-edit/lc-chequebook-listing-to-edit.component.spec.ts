import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChequebookListingToEditComponent } from './lc-chequebook-listing-to-edit.component';

describe('LcChequebookListingToEditComponent', () => {
  let component: LcChequebookListingToEditComponent;
  let fixture: ComponentFixture<LcChequebookListingToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChequebookListingToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChequebookListingToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
