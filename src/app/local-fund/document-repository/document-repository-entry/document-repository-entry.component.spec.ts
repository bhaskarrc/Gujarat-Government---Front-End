import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRepositoryEntryComponent } from './document-repository-entry.component';

describe('DocumentRepositoryEntryComponent', () => {
  let component: DocumentRepositoryEntryComponent;
  let fixture: ComponentFixture<DocumentRepositoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRepositoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRepositoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
