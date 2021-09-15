import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoLevelComponent } from './ddo-level.component';

describe('DdoLevelComponent', () => {
  let component: DdoLevelComponent;
  let fixture: ComponentFixture<DdoLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
