import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRateMasterAoComponent } from './bank-rate-master-ao.component';

describe('BankRateMasterAoComponent', () => {
  let component: BankRateMasterAoComponent;
  let fixture: ComponentFixture<BankRateMasterAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRateMasterAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRateMasterAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
