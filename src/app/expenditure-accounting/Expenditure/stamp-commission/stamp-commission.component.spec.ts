import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampCommissionComponent } from './stamp-commission.component';

describe('StampCommissionComponent', () => {
  let component: StampCommissionComponent;
  let fixture: ComponentFixture<StampCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
