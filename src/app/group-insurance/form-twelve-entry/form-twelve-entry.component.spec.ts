import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwelveEntryComponent } from './form-twelve-entry.component';

describe('FormTwelveEntryComponent', () => {
  let component: FormTwelveEntryComponent;
  let fixture: ComponentFixture<FormTwelveEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwelveEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwelveEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
