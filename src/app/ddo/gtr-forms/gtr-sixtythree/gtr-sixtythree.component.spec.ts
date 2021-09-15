import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrSixtythreeComponent } from './gtr-sixtythree.component';

describe('GtrSixtythreeComponent', () => {
  let component: GtrSixtythreeComponent;
  let fixture: ComponentFixture<GtrSixtythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrSixtythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrSixtythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
