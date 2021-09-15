import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGenerationComponent } from './account-generation.component';

describe('AccountGenerationComponent', () => {
  let component: AccountGenerationComponent;
  let fixture: ComponentFixture<AccountGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
