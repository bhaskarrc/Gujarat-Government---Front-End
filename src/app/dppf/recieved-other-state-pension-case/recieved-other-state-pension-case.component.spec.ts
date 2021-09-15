import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedOtherStatePensionCaseComponent } from './recieved-other-state-pension-case.component';

describe('RecievedOtherStatePensionCaseComponent', () => {
  let component: RecievedOtherStatePensionCaseComponent;
  let fixture: ComponentFixture<RecievedOtherStatePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedOtherStatePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedOtherStatePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
