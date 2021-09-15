import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFourtyEightComponent } from './gtr-fourty-eight.component';

describe('GtrFourtyEightComponent', () => {
  let component: GtrFourtyEightComponent;
  let fixture: ComponentFixture<GtrFourtyEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFourtyEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFourtyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
