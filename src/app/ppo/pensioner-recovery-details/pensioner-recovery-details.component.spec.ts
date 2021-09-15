import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerRecoveryDetailsComponent } from './pensioner-recovery-details.component';

describe('PensionerRecoveryDetailsComponent', () => {
  let component: PensionerRecoveryDetailsComponent;
  let fixture: ComponentFixture<PensionerRecoveryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionerRecoveryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerRecoveryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
