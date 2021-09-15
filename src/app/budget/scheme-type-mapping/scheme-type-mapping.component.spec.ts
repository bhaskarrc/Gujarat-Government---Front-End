import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTypeMappingComponent } from './scheme-type-mapping.component';

describe('SchemeTypeMappingComponent', () => {
  let component: SchemeTypeMappingComponent;
  let fixture: ComponentFixture<SchemeTypeMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeTypeMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeTypeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
