import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryAoLinkComponent } from './manual-entry-ao-link.component';

describe('ManualEntryAoLinkComponent', () => {
  let component: ManualEntryAoLinkComponent;
  let fixture: ComponentFixture<ManualEntryAoLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryAoLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryAoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
