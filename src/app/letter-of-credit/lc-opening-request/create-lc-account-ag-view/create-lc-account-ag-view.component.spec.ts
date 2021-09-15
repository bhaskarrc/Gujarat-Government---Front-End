import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLcAccountAgViewComponent } from './create-lc-account-ag-view.component';

describe('CreateLcAccountAgViewComponent', () => {
  let component: CreateLcAccountAgViewComponent;
  let fixture: ComponentFixture<CreateLcAccountAgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLcAccountAgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLcAccountAgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
