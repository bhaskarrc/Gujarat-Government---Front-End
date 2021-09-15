import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexNoDialogComponent } from './cardex-no-dialog.component';

describe('CardexNoDialogComponent', () => {
  let component: CardexNoDialogComponent;
  let fixture: ComponentFixture<CardexNoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexNoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexNoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
