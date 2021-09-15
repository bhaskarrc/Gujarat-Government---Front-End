import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLcAccountDivisionEditComponent } from './create-lc-account-division-edit.component';

describe('CreateLcAccountDivisionEditComponent', () => {
  let component: CreateLcAccountDivisionEditComponent;
  let fixture: ComponentFixture<CreateLcAccountDivisionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLcAccountDivisionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLcAccountDivisionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
