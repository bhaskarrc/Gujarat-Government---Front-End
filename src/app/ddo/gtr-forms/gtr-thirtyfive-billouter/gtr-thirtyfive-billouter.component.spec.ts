import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrThirtyfiveBillouterComponent } from './gtr-thirtyfive-billouter.component';

describe('GtrThirtyfiveBillouterComponent', () => {
  let component: GtrThirtyfiveBillouterComponent;
  let fixture: ComponentFixture<GtrThirtyfiveBillouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrThirtyfiveBillouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrThirtyfiveBillouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
