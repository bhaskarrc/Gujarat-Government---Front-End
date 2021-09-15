import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemarksComponent } from './admin-remarks.component';

describe('AdminRemarksComponent', () => {
  let component: AdminRemarksComponent;
  let fixture: ComponentFixture<AdminRemarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
