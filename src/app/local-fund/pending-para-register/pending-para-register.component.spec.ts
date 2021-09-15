import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingParaRegisterComponent } from './pending-para-register.component';

describe('PendingParaRegisterComponent', () => {
  let component: PendingParaRegisterComponent;
  let fixture: ComponentFixture<PendingParaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingParaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingParaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
