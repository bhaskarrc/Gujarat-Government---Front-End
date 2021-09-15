import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexSearchDialogComponent } from './cardex-search-dialog.component';

describe('CardexSearchDialogComponent', () => {
  let component: CardexSearchDialogComponent;
  let fixture: ComponentFixture<CardexSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
