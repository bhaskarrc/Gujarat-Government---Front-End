import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyLeafRegisterComponent } from './fly-leaf-register.component';

describe('FlyLeafRegisterComponent', () => {
  let component: FlyLeafRegisterComponent;
  let fixture: ComponentFixture<FlyLeafRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyLeafRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyLeafRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
