import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardRegisterRegisterComponent } from './inward-register-register.component';

describe('InwardRegisterRegisterComponent', () => {
  let component: InwardRegisterRegisterComponent;
  let fixture: ComponentFixture<InwardRegisterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardRegisterRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardRegisterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
