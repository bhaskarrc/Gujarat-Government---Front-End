import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDenominationMasterComponent } from './stamp-denomination-master.component';

describe('StampDenominationMasterComponent', () => {
  let component: StampDenominationMasterComponent;
  let fixture: ComponentFixture<StampDenominationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDenominationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDenominationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
