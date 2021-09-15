import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePensionCaseComponent } from './online-pension-case.component';

describe('OnlinePensionCaseComponent', () => {
  let component: OnlinePensionCaseComponent;
  let fixture: ComponentFixture<OnlinePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
