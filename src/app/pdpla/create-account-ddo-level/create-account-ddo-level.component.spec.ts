import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountDdoLevelComponent } from './create-account-ddo-level.component';

describe('CreateAccountDdoLevelComponent', () => {
  let component: CreateAccountDdoLevelComponent;
  let fixture: ComponentFixture<CreateAccountDdoLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountDdoLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountDdoLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
