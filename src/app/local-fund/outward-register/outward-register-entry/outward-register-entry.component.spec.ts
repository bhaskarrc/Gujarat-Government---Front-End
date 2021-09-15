import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardRegisterEntryComponent } from './outward-register-entry.component';

describe('OutwardRegisterEntryComponent', () => {
  let component: OutwardRegisterEntryComponent;
  let fixture: ComponentFixture<OutwardRegisterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardRegisterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardRegisterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
