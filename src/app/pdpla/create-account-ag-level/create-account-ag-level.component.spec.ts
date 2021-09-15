import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountAgLevelComponent } from './create-account-ag-level.component';

describe('CreateAccountAgLevelComponent', () => {
  let component: CreateAccountAgLevelComponent;
  let fixture: ComponentFixture<CreateAccountAgLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountAgLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountAgLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
