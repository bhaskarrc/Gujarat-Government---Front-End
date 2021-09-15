import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwelveComponent } from './form-twelve.component';

describe('FormTwelveComponent', () => {
  let component: FormTwelveComponent;
  let fixture: ComponentFixture<FormTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
