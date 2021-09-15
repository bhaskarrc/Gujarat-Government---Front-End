import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCancelationToEditComponent } from './cheque-cancelation-to-edit.component';

describe('ChequeCancelationToEditComponent', () => {
  let component: ChequeCancelationToEditComponent;
  let fixture: ComponentFixture<ChequeCancelationToEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCancelationToEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCancelationToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
