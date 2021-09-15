import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedOtherStatePensionCaseToPpoComponent } from './recieved-other-state-pension-case-to-ppo.component';

describe('RecievedOtherStatePensionCaseToPpoComponent', () => {
  let component: RecievedOtherStatePensionCaseToPpoComponent;
  let fixture: ComponentFixture<RecievedOtherStatePensionCaseToPpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedOtherStatePensionCaseToPpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedOtherStatePensionCaseToPpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
