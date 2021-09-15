import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPreparationGovComponent } from './challan-preparation-gov.component';

describe('ChallanPreparationGovComponent', () => {
  let component: ChallanPreparationGovComponent;
  let fixture: ComponentFixture<ChallanPreparationGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPreparationGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPreparationGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
