import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountFdLevelComponent } from './create-account-fd-level.component';

describe('CreateAccountFdLevelComponent', () => {
  let component: CreateAccountFdLevelComponent;
  let fixture: ComponentFixture<CreateAccountFdLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountFdLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountFdLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
