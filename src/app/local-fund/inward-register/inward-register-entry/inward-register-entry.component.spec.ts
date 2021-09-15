import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardRegisterEntryComponent } from './inward-register-entry.component';

describe('InwardRegisterEntryComponent', () => {
  let component: InwardRegisterEntryComponent;
  let fixture: ComponentFixture<InwardRegisterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardRegisterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardRegisterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
