import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectMasterDialogComponent } from './object-master-dialog.component';

describe('ObjectMasterDialogComponent', () => {
  let component: ObjectMasterDialogComponent;
  let fixture: ComponentFixture<ObjectMasterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectMasterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectMasterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
