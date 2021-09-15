import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPreprationFormComponent } from './bill-prepration-form.component';

describe('BillPreprationFormComponent', () => {
  let component: BillPreprationFormComponent;
  let fixture: ComponentFixture<BillPreprationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPreprationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPreprationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
