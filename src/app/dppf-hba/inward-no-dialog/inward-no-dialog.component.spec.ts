import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardNoDialogComponent } from './inward-no-dialog.component';

describe('InwardNoDialogComponent', () => {
  let component: InwardNoDialogComponent;
  let fixture: ComponentFixture<InwardNoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardNoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardNoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
