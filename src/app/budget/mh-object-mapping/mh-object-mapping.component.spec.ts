import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhObjectMappingComponent } from './mh-object-mapping.component';

describe('MhObjectMappingComponent', () => {
  let component: MhObjectMappingComponent;
  let fixture: ComponentFixture<MhObjectMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhObjectMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhObjectMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
