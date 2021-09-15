import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCaseComponent } from './field-case.component';

describe('FieldCaseComponent', () => {
  let component: FieldCaseComponent;
  let fixture: ComponentFixture<FieldCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
