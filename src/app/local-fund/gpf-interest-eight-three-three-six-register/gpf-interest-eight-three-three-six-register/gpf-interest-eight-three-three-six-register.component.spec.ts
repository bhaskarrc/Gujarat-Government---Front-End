import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfInterestEightThreeThreeSixRegisterComponent } from './gpf-interest-eight-three-three-six-register.component';

describe('GpfInterestEightThreeThreeSixRegisterComponent', () => {
  let component: GpfInterestEightThreeThreeSixRegisterComponent;
  let fixture: ComponentFixture<GpfInterestEightThreeThreeSixRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfInterestEightThreeThreeSixRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfInterestEightThreeThreeSixRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
