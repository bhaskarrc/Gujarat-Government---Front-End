import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoDialogBoxComponent } from './ppo-dialog-box.component';

describe('PpoDialogBoxComponent', () => {
  let component: PpoDialogBoxComponent;
  let fixture: ComponentFixture<PpoDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpoDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpoDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
