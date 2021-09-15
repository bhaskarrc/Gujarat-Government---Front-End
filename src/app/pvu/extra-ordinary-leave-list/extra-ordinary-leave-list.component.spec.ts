import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraOrdinaryLeaveListComponent } from './extra-ordinary-leave-list.component';

describe('ExtraOrdinaryLeaveListComponent', () => {
  let component: ExtraOrdinaryLeaveListComponent;
  let fixture: ComponentFixture<ExtraOrdinaryLeaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraOrdinaryLeaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraOrdinaryLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
