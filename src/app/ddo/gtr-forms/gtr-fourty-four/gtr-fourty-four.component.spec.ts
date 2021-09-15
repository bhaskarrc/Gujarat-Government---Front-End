import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFourtyFourComponent } from './gtr-fourty-four.component';

describe('GtrFourtyFourComponent', () => {
  let component: GtrFourtyFourComponent;
  let fixture: ComponentFixture<GtrFourtyFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFourtyFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFourtyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
