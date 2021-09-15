import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentAccountComponent } from './adjustment-account.component';

describe('AdjustmentAccountComponent', () => {
  let component: AdjustmentAccountComponent;
  let fixture: ComponentFixture<AdjustmentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
