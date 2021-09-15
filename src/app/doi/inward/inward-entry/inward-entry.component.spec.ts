import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardEntryComponent } from './inward-entry.component';

describe('InwardEntryComponent', () => {
  let component: InwardEntryComponent;
  let fixture: ComponentFixture<InwardEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
