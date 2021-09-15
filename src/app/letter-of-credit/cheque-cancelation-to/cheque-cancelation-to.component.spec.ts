import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCancelationToComponent } from './cheque-cancelation-to.component';

describe('ChequeCancelationToComponent', () => {
  let component: ChequeCancelationToComponent;
  let fixture: ComponentFixture<ChequeCancelationToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCancelationToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCancelationToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
