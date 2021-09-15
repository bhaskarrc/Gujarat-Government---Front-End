import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrThirtyfiveComponent } from './gtr-thirtyfive.component';

describe('GtrThirtyfiveComponent', () => {
  let component: GtrThirtyfiveComponent;
  let fixture: ComponentFixture<GtrThirtyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrThirtyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrThirtyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
