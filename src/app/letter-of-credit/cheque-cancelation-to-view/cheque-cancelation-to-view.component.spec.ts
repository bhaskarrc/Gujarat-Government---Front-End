import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCancelationToViewComponent } from './cheque-cancelation-to-view.component';

describe('ChequeCancelationToViewComponent', () => {
  let component: ChequeCancelationToViewComponent;
  let fixture: ComponentFixture<ChequeCancelationToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCancelationToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCancelationToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
