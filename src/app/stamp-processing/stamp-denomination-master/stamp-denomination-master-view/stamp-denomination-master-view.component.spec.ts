import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDenominationMasterViewComponent } from './stamp-denomination-master-view.component';

describe('StampDenominationMasterViewComponent', () => {
  let component: StampDenominationMasterViewComponent;
  let fixture: ComponentFixture<StampDenominationMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDenominationMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDenominationMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
