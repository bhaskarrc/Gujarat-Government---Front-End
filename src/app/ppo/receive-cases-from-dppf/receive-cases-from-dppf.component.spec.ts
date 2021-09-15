import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCasesFromDppfComponent } from './receive-cases-from-dppf.component';

describe('ReceiveCasesFromDppfComponent', () => {
  let component: ReceiveCasesFromDppfComponent;
  let fixture: ComponentFixture<ReceiveCasesFromDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveCasesFromDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveCasesFromDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
