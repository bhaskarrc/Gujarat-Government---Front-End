import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountToDoiComponent } from './submit-account-to-doi.component';

describe('SubmitAccountToDoiComponent', () => {
  let component: SubmitAccountToDoiComponent;
  let fixture: ComponentFixture<SubmitAccountToDoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountToDoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountToDoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
