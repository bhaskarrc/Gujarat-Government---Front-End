import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbaMcaNoDialogComponent } from './hba-mca-no-dialog.component';

describe('HbaMcaNoDialogComponent', () => {
  let component: HbaMcaNoDialogComponent;
  let fixture: ComponentFixture<HbaMcaNoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbaMcaNoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbaMcaNoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
