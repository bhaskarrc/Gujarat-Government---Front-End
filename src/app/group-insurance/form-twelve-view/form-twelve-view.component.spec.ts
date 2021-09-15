import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwelveViewComponent } from './form-twelve-view.component';

describe('FormTwelveViewComponent', () => {
  let component: FormTwelveViewComponent;
  let fixture: ComponentFixture<FormTwelveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwelveViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwelveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
