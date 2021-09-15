import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFortyfiveComponent } from './gtr-fortyfive.component';

describe('GtrFortyfiveComponent', () => {
  let component: GtrFortyfiveComponent;
  let fixture: ComponentFixture<GtrFortyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFortyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFortyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
