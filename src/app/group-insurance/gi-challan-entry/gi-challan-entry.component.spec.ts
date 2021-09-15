import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiChallanEntryComponent } from './gi-challan-entry.component';

describe('GiChallanEntryComponent', () => {
  let component: GiChallanEntryComponent;
  let fixture: ComponentFixture<GiChallanEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiChallanEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiChallanEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
