import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppfDialogBoxComponent } from './dppf-dialog-box.component';

describe('DppfDialogBoxComponent', () => {
  let component: DppfDialogBoxComponent;
  let fixture: ComponentFixture<DppfDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppfDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppfDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
