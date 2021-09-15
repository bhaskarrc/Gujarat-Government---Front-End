import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceForApprovalComponent } from './advice-for-approval.component';

describe('AdviceForApprovalComponent', () => {
  let component: AdviceForApprovalComponent;
  let fixture: ComponentFixture<AdviceForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
