import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditMrRequestComponent } from './audit-mr-request.component';

describe('AuditMrRequestComponent', () => {
  let component: AuditMrRequestComponent;
  let fixture: ComponentFixture<AuditMrRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditMrRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditMrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
