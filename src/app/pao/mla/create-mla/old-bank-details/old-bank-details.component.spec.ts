import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldBankDetailsComponent } from './old-bank-details.component';

describe('OldBankDetailsComponent', () => {
  let component: OldBankDetailsComponent;
  let fixture: ComponentFixture<OldBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
