import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDenominationMasterTcComponent } from './stamp-denomination-master-tc.component';

describe('StampDenominationMasterTcComponent', () => {
  let component: StampDenominationMasterTcComponent;
  let fixture: ComponentFixture<StampDenominationMasterTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDenominationMasterTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDenominationMasterTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
