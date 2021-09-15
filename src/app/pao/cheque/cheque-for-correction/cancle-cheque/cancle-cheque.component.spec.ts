import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleChequeComponent } from './cancle-cheque.component';

describe('CancleChequeComponent', () => {
  let component: CancleChequeComponent;
  let fixture: ComponentFixture<CancleChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancleChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancleChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
