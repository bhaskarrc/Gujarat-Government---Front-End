import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprForwardingLetterDetailsComponent } from './mpr-forwarding-letter-details.component';

describe('MprForwardingLetterDetailsComponent', () => {
  let component: MprForwardingLetterDetailsComponent;
  let fixture: ComponentFixture<MprForwardingLetterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprForwardingLetterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprForwardingLetterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
