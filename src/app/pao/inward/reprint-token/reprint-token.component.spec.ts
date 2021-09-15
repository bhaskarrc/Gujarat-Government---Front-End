import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintTokenComponent } from './reprint-token.component';

describe('ReprintTokenComponent', () => {
  let component: ReprintTokenComponent;
  let fixture: ComponentFixture<ReprintTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprintTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprintTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
