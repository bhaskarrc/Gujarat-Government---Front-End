import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElevenEntryComponent } from './form-eleven-entry.component';

describe('FormElevenEntryComponent', () => {
  let component: FormElevenEntryComponent;
  let fixture: ComponentFixture<FormElevenEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElevenEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElevenEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
