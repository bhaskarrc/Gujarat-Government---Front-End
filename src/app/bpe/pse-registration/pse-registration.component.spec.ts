import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseRegistrationComponent } from './pse-registration.component';

describe('PseRegistrationComponent', () => {
  let component: PseRegistrationComponent;
  let fixture: ComponentFixture<PseRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
