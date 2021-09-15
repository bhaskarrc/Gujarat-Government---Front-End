import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCaDaPrecentageComponent } from './change-ca-da-precentage.component';

describe('ChangeCaDaPrecentageComponent', () => {
  let component: ChangeCaDaPrecentageComponent;
  let fixture: ComponentFixture<ChangeCaDaPrecentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCaDaPrecentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCaDaPrecentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
