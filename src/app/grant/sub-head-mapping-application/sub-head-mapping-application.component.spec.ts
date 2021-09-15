import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadMappingApplicationComponent } from './sub-head-mapping-application.component';

describe('SubHeadMappingApplicationComponent', () => {
  let component: SubHeadMappingApplicationComponent;
  let fixture: ComponentFixture<SubHeadMappingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeadMappingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeadMappingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
