import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiRegisterEntryComponent } from './rti-register-entry.component';

describe('RtiRegisterEntryComponent', () => {
  let component: RtiRegisterEntryComponent;
  let fixture: ComponentFixture<RtiRegisterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiRegisterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiRegisterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
