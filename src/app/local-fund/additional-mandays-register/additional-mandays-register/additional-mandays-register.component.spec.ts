import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalMandaysRegisterComponent } from './additional-mandays-register.component';

describe('AdditionalMandaysRegisterComponent', () => {
  let component: AdditionalMandaysRegisterComponent;
  let fixture: ComponentFixture<AdditionalMandaysRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalMandaysRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalMandaysRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
