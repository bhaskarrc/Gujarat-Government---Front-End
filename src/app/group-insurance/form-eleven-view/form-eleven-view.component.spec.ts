import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElevenViewComponent } from './form-eleven-view.component';

describe('FormElevenViewComponent', () => {
  let component: FormElevenViewComponent;
  let fixture: ComponentFixture<FormElevenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElevenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElevenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
