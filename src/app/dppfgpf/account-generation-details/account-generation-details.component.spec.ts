import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGenerationDetailsComponent } from './account-generation-details.component';

describe('AccountGenerationDetailsComponent', () => {
  let component: AccountGenerationDetailsComponent;
  let fixture: ComponentFixture<AccountGenerationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGenerationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGenerationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
