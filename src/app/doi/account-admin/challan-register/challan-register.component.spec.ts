import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanRegisterComponent } from './challan-register.component';

describe('ChallanRegisterComponent', () => {
  let component: ChallanRegisterComponent;
  let fixture: ComponentFixture<ChallanRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
