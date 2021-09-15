import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCancelationDivisionEditComponent } from './cheque-cancelation-division-edit.component';

describe('ChequeCancelationDivisionEditComponent', () => {
  let component: ChequeCancelationDivisionEditComponent;
  let fixture: ComponentFixture<ChequeCancelationDivisionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCancelationDivisionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCancelationDivisionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
