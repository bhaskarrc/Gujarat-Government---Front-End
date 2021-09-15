import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardEntryComponent } from './outward-entry.component';

describe('OutwardEntryComponent', () => {
  let component: OutwardEntryComponent;
  let fixture: ComponentFixture<OutwardEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
