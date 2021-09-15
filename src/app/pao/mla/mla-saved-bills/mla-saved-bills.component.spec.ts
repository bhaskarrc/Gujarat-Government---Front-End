import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaSavedBillsComponent } from './mla-saved-bills.component';

describe('MlaSavedBillsComponent', () => {
  let component: MlaSavedBillsComponent;
  let fixture: ComponentFixture<MlaSavedBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaSavedBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaSavedBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
