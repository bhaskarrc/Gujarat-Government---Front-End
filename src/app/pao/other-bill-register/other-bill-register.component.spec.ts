import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBillRegisterComponent } from './other-bill-register.component';

describe('OtherBillRegisterComponent', () => {
  let component: OtherBillRegisterComponent;
  let fixture: ComponentFixture<OtherBillRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBillRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBillRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
