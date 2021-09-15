import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountComponent } from './submit-account.component';

describe('SubmitAccountComponent', () => {
  let component: SubmitAccountComponent;
  let fixture: ComponentFixture<SubmitAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
