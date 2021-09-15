import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDenominationMasterListComponent } from './stamp-denomination-master-list.component';

describe('StampDenominationMasterListComponent', () => {
  let component: StampDenominationMasterListComponent;
  let fixture: ComponentFixture<StampDenominationMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDenominationMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDenominationMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
