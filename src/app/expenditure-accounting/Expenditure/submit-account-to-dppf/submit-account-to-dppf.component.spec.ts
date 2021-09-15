import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountToDppfComponent } from './submit-account-to-dppf.component';

describe('SubmitAccountToDppfComponent', () => {
  let component: SubmitAccountToDppfComponent;
  let fixture: ComponentFixture<SubmitAccountToDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountToDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountToDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
