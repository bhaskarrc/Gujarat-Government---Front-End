import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandForNdcComponent } from './demand-for-ndc.component';

describe('DemandForNdcComponent', () => {
  let component: DemandForNdcComponent;
  let fixture: ComponentFixture<DemandForNdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandForNdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandForNdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
