import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcChequebookListingEditComponent } from './lc-chequebook-listing-edit.component';

describe('LcChequebookListingEditComponent', () => {
  let component: LcChequebookListingEditComponent;
  let fixture: ComponentFixture<LcChequebookListingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcChequebookListingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcChequebookListingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
