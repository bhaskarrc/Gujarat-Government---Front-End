import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdGroupMappingComponent } from './fd-group-mapping.component';

describe('FdGroupMappingComponent', () => {
  let component: FdGroupMappingComponent;
  let fixture: ComponentFixture<FdGroupMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdGroupMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdGroupMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
