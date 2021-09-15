import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountHodLevelComponent } from './create-account-hod-level.component';

describe('CreateAccountHodLevelComponent', () => {
  let component: CreateAccountHodLevelComponent;
  let fixture: ComponentFixture<CreateAccountHodLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountHodLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountHodLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
