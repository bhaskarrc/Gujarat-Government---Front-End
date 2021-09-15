import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdviceComponent } from './form-advice.component';

describe('FormAdviceComponent', () => {
  let component: FormAdviceComponent;
  let fixture: ComponentFixture<FormAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
