import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsPranMappingComponent } from './nps-pran-mapping.component';

describe('NpsPranMappingComponent', () => {
  let component: NpsPranMappingComponent;
  let fixture: ComponentFixture<NpsPranMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsPranMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsPranMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
