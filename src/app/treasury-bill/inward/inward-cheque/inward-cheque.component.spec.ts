import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardChequeComponent } from './inward-cheque.component';

describe('InwardChequeComponent', () => {
  let component: InwardChequeComponent;
  let fixture: ComponentFixture<InwardChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
