import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankConfigurationMasterComponent } from './bank-configuration-master.component';

describe('BankConfigurationMasterComponent', () => {
  let component: BankConfigurationMasterComponent;
  let fixture: ComponentFixture<BankConfigurationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankConfigurationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankConfigurationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
