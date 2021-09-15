import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePensionCaseComponent } from './receive-pension-case.component';

describe('ReceivePensionCaseComponent', () => {
  let component: ReceivePensionCaseComponent;
  let fixture: ComponentFixture<ReceivePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
