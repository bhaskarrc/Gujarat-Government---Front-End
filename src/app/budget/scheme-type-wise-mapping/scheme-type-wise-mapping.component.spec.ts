import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTypeWiseMappingComponent } from './scheme-type-wise-mapping.component';

describe('SchemeTypeWiseMappingComponent', () => {
  let component: SchemeTypeWiseMappingComponent;
  let fixture: ComponentFixture<SchemeTypeWiseMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeTypeWiseMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeTypeWiseMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
