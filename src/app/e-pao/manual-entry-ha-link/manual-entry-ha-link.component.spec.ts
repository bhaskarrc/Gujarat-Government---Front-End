import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryHaLinkComponent } from './manual-entry-ha-link.component';

describe('ManualEntryHaLinkComponent', () => {
  let component: ManualEntryHaLinkComponent;
  let fixture: ComponentFixture<ManualEntryHaLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryHaLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryHaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
