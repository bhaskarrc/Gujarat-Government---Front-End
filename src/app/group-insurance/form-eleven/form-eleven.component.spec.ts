import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElevenComponent } from './form-eleven.component';

describe('FormElevenComponent', () => {
  let component: FormElevenComponent;
  let fixture: ComponentFixture<FormElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
