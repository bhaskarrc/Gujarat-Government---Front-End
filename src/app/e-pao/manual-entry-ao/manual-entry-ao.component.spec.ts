import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryAoComponent } from './manual-entry-ao.component';

describe('ManualEntryAoComponent', () => {
  let component: ManualEntryAoComponent;
  let fixture: ComponentFixture<ManualEntryAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
