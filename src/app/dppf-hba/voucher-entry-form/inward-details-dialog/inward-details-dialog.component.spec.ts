import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardDetailsDialogComponent } from './inward-details-dialog.component';

describe('InwardDetailsDialogComponent', () => {
  let component: InwardDetailsDialogComponent;
  let fixture: ComponentFixture<InwardDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
