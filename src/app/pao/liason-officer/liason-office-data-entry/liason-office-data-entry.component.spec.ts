import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiasonOfficeDataEntryComponent } from './liason-office-data-entry.component';

describe('LiasonOfficeDataEntryComponent', () => {
  let component: LiasonOfficeDataEntryComponent;
  let fixture: ComponentFixture<LiasonOfficeDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiasonOfficeDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiasonOfficeDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
