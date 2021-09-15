import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupritendentLevelComponent } from './supritendent-level.component';

describe('SupritendentLevelComponent', () => {
  let component: SupritendentLevelComponent;
  let fixture: ComponentFixture<SupritendentLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupritendentLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupritendentLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
