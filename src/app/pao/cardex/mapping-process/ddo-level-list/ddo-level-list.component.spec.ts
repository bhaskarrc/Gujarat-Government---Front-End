import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoLevelListComponent } from './ddo-level-list.component';

describe('DdoLevelListComponent', () => {
  let component: DdoLevelListComponent;
  let fixture: ComponentFixture<DdoLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
