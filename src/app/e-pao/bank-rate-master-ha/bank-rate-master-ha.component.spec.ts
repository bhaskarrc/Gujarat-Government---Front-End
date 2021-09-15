import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRateMasterHaComponent } from './bank-rate-master-ha.component';

describe('BankRateMasterHaComponent', () => {
  let component: BankRateMasterHaComponent;
  let fixture: ComponentFixture<BankRateMasterHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRateMasterHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRateMasterHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
