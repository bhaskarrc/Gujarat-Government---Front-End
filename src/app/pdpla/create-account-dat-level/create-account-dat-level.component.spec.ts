import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountDatLevelComponent } from './create-account-dat-level.component';

describe('CreateAccountDatLevelComponent', () => {
  let component: CreateAccountDatLevelComponent;
  let fixture: ComponentFixture<CreateAccountDatLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountDatLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountDatLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
