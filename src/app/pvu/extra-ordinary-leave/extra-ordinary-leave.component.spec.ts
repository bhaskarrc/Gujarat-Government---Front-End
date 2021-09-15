import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraOrdinaryLeaveComponent } from './extra-ordinary-leave.component';

describe('ExtraOrdinaryLeaveComponent', () => {
  let component: ExtraOrdinaryLeaveComponent;
  let fixture: ComponentFixture<ExtraOrdinaryLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraOrdinaryLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraOrdinaryLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
