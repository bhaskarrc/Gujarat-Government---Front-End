import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptStoDocumentComponent } from './accept-sto-document.component';

describe('AcceptStoDocumentComponent', () => {
  let component: AcceptStoDocumentComponent;
  let fixture: ComponentFixture<AcceptStoDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptStoDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptStoDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
