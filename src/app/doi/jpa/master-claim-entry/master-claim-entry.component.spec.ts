import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClaimEntryComponent } from './master-claim-entry.component';

describe('MasterClaimEntryComponent', () => {
  let component: MasterClaimEntryComponent;
  let fixture: ComponentFixture<MasterClaimEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterClaimEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClaimEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
