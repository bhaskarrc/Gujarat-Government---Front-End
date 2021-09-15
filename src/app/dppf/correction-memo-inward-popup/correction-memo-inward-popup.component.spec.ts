import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionMemoInwardPopupComponent } from './correction-memo-inward-popup.component';

describe('CorrectionMemoInwardPopupComponent', () => {
  let component: CorrectionMemoInwardPopupComponent;
  let fixture: ComponentFixture<CorrectionMemoInwardPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionMemoInwardPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionMemoInwardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
