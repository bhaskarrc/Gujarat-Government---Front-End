import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedOnlinePensionCaseComponent } from './received-online-pension-case.component';

describe('ReceivedOnlinePensionCaseComponent', () => {
  let component: ReceivedOnlinePensionCaseComponent;
  let fixture: ComponentFixture<ReceivedOnlinePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedOnlinePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedOnlinePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
