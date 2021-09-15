import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsGsfsDataEntryComponent } from './nps-gsfs-data-entry.component';

describe('NpsGsfsDataEntryComponent', () => {
  let component: NpsGsfsDataEntryComponent;
  let fixture: ComponentFixture<NpsGsfsDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsGsfsDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsGsfsDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
