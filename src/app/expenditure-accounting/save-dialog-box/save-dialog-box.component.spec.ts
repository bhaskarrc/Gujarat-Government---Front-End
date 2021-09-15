import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDialogBoxComponent } from './save-dialog-box.component';

describe('SaveDialogBoxComponent', () => {
  let component: SaveDialogBoxComponent;
  let fixture: ComponentFixture<SaveDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
