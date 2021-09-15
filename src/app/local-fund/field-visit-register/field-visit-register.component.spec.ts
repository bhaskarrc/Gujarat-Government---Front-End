import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVisitRegisterComponent } from './field-visit-register.component';

describe('FieldVisitRegisterComponent', () => {
  let component: FieldVisitRegisterComponent;
  let fixture: ComponentFixture<FieldVisitRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldVisitRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldVisitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
