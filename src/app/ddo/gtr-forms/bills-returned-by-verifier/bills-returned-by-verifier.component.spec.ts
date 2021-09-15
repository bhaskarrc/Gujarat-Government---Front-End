import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsReturnedByVerifierComponent } from './bills-returned-by-verifier.component';

describe('BillsReturnedByVerifierComponent', () => {
  let component: BillsReturnedByVerifierComponent;
  let fixture: ComponentFixture<BillsReturnedByVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsReturnedByVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsReturnedByVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
