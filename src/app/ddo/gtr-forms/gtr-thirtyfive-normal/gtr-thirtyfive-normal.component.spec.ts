import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrThirtyfiveNormalComponent } from './gtr-thirtyfive-normal.component';

describe('GtrThirtyfiveNormalComponent', () => {
  let component: GtrThirtyfiveNormalComponent;
  let fixture: ComponentFixture<GtrThirtyfiveNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrThirtyfiveNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrThirtyfiveNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
