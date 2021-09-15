import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeSchemewiseDdoListComponent } from './standing-charge-schemewise-ddo-list.component';

describe('StandingChargeSchemewiseDdoListComponent', () => {
  let component: StandingChargeSchemewiseDdoListComponent;
  let fixture: ComponentFixture<StandingChargeSchemewiseDdoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeSchemewiseDdoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeSchemewiseDdoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
