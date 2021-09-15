import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankConfigurationMasterListComponent } from './bank-configuration-master-list.component';

describe('BankConfigurationMasterListComponent', () => {
  let component: BankConfigurationMasterListComponent;
  let fixture: ComponentFixture<BankConfigurationMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankConfigurationMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankConfigurationMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
