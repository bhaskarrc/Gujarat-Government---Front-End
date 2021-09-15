import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbaDialogComponent } from './hba-dialog.component';

describe('HbaDialogComponent', () => {
  let component: HbaDialogComponent;
  let fixture: ComponentFixture<HbaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
