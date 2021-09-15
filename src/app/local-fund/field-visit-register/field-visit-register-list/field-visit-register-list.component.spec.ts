import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVisitRegisterListComponent } from './field-visit-register-list.component';

describe('FieldVisitRegisterListComponent', () => {
  let component: FieldVisitRegisterListComponent;
  let fixture: ComponentFixture<FieldVisitRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldVisitRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldVisitRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
