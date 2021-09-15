import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiAppealRegisterComponent } from './rti-appeal-register.component';

describe('RtiAppealRegisterComponent', () => {
  let component: RtiAppealRegisterComponent;
  let fixture: ComponentFixture<RtiAppealRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiAppealRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiAppealRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
