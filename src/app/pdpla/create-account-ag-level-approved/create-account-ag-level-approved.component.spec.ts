import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountAgLevelApprovedComponent } from './create-account-ag-level-approved.component';

describe('CreateAccountAgLevelApprovedComponent', () => {
  let component: CreateAccountAgLevelApprovedComponent;
  let fixture: ComponentFixture<CreateAccountAgLevelApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountAgLevelApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountAgLevelApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
