import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprApproveRejectComponent } from './ppr-approve-reject.component';

describe('PprApproveRejectComponent', () => {
  let component: PprApproveRejectComponent;
  let fixture: ComponentFixture<PprApproveRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprApproveRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprApproveRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
