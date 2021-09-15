import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaArrearComponent } from './mla-arrear.component';

describe('MlaArrearComponent', () => {
  let component: MlaArrearComponent;
  let fixture: ComponentFixture<MlaArrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaArrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaArrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
