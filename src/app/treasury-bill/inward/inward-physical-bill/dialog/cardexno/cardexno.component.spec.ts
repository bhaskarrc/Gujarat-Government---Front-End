import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexnoComponent } from './cardexno.component';

describe('CardexnoComponent', () => {
  let component: CardexnoComponent;
  let fixture: ComponentFixture<CardexnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
