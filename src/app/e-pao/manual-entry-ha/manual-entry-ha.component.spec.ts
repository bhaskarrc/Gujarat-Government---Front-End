import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryHaComponent } from './manual-entry-ha.component';

describe('ManualEntryHaComponent', () => {
  let component: ManualEntryHaComponent;
  let fixture: ComponentFixture<ManualEntryHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
