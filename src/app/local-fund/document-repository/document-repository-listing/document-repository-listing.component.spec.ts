import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRepositoryListingComponent } from './document-repository-listing.component';

describe('DocumentRepositoryListingComponent', () => {
  let component: DocumentRepositoryListingComponent;
  let fixture: ComponentFixture<DocumentRepositoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRepositoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRepositoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
