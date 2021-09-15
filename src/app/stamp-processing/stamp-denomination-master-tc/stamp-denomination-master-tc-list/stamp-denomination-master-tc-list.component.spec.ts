import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDenominationMasterTcListComponent } from './stamp-denomination-master-tc-list.component';

describe('StampDenominationMasterTcListComponent', () => {
  let component: StampDenominationMasterTcListComponent;
  let fixture: ComponentFixture<StampDenominationMasterTcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDenominationMasterTcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDenominationMasterTcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
