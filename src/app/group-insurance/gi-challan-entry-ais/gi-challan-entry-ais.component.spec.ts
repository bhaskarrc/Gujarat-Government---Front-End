import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiChallanEntryAisComponent } from './gi-challan-entry-ais.component';

describe('GiChallanEntryAisComponent', () => {
  let component: GiChallanEntryAisComponent;
  let fixture: ComponentFixture<GiChallanEntryAisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiChallanEntryAisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiChallanEntryAisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
