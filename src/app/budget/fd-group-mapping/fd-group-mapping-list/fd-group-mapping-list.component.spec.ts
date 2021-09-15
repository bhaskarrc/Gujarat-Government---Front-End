import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdGroupMappingListComponent } from './fd-group-mapping-list.component';

describe('FdGroupMappingListComponent', () => {
  let component: FdGroupMappingListComponent;
  let fixture: ComponentFixture<FdGroupMappingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdGroupMappingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdGroupMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
