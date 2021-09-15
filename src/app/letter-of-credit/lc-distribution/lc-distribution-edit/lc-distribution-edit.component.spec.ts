import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcDistributionEditComponent } from './lc-distribution-edit.component';

describe('LcDistributionEditComponent', () => {
  let component: LcDistributionEditComponent;
  let fixture: ComponentFixture<LcDistributionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcDistributionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcDistributionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
