import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountWiseEntryComponent } from './nps-account-wise-entry.component';

describe('NpsAccountWiseEntryComponent', () => {
  let component: NpsAccountWiseEntryComponent;
  let fixture: ComponentFixture<NpsAccountWiseEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountWiseEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountWiseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
