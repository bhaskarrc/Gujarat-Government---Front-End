import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampRegisterEntryComponent } from './stamp-register-entry.component';

describe('StampRegisterEntryComponent', () => {
  let component: StampRegisterEntryComponent;
  let fixture: ComponentFixture<StampRegisterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampRegisterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampRegisterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
