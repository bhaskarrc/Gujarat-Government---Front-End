import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoCardexMappingComponent } from './ddo-cardex-mapping.component';

describe('DdoCardexMappingComponent', () => {
  let component: DdoCardexMappingComponent;
  let fixture: ComponentFixture<DdoCardexMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoCardexMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoCardexMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
