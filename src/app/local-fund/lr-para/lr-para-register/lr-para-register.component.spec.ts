import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrParaRegisterComponent } from './lr-para-register.component';

describe('LrParaRegisterComponent', () => {
  let component: LrParaRegisterComponent;
  let fixture: ComponentFixture<LrParaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrParaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrParaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
