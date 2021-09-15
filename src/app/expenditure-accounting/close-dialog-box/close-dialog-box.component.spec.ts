import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseDialogBoxComponent } from './close-dialog-box.component';

describe('CloseDialogBoxComponent', () => {
  let component: CloseDialogBoxComponent;
  let fixture: ComponentFixture<CloseDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
