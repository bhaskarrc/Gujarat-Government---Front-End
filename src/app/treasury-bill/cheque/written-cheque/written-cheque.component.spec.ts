import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenChequeComponent } from './written-cheque.component';

describe('WrittenChequeComponent', () => {
  let component: WrittenChequeComponent;
  let fixture: ComponentFixture<WrittenChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittenChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
