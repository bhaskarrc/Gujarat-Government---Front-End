import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingAccountWiseEntryComponent } from './missing-account-wise-entry.component';

describe('MissingAccountWiseEntryComponent', () => {
  let component: MissingAccountWiseEntryComponent;
  let fixture: ComponentFixture<MissingAccountWiseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingAccountWiseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingAccountWiseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
