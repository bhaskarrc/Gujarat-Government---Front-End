import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEightZeroOneOneAgDataEntryComponent } from './gi-eight-zero-one-one-ag-data-entry.component';

describe('GiEightZeroOneOneAgDataEntryComponent', () => {
  let component: GiEightZeroOneOneAgDataEntryComponent;
  let fixture: ComponentFixture<GiEightZeroOneOneAgDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEightZeroOneOneAgDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEightZeroOneOneAgDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
