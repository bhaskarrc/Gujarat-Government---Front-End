import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadMappingApplicationListComponent } from './sub-head-mapping-application-list.component';

describe('SubHeadMappingApplicationListComponent', () => {
  let component: SubHeadMappingApplicationListComponent;
  let fixture: ComponentFixture<SubHeadMappingApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeadMappingApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeadMappingApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
