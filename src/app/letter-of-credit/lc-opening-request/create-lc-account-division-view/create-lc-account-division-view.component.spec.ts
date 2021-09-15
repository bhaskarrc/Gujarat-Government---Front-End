import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLcAccountDivisionViewComponent } from './create-lc-account-division-view.component';

describe('CreateLcAccountDivisionViewComponent', () => {
  let component: CreateLcAccountDivisionViewComponent;
  let fixture: ComponentFixture<CreateLcAccountDivisionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLcAccountDivisionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLcAccountDivisionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
