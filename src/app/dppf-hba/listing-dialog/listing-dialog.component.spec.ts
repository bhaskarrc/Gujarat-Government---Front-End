import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDialogComponent } from './listing-dialog.component';

describe('ListingDialogComponent', () => {
  let component: ListingDialogComponent;
  let fixture: ComponentFixture<ListingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
