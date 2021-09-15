import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVisitRegisterViewComponent } from './field-visit-register-view.component';

describe('FieldVisitRegisterViewComponent', () => {
  let component: FieldVisitRegisterViewComponent;
  let fixture: ComponentFixture<FieldVisitRegisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldVisitRegisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldVisitRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
