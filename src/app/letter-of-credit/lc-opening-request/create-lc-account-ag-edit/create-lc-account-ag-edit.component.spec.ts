import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLcAccountAgEditComponent } from './create-lc-account-ag-edit.component';

describe('CreateLcAccountAgEditComponent', () => {
  let component: CreateLcAccountAgEditComponent;
  let fixture: ComponentFixture<CreateLcAccountAgEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLcAccountAgEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLcAccountAgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
