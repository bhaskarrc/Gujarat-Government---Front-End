import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementExpenditureComponent } from './management-expenditure.component';

describe('ManagementExpenditureComponent', () => {
  let component: ManagementExpenditureComponent;
  let fixture: ComponentFixture<ManagementExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
