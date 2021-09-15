import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrEightythreeComponent } from './gtr-eightythree.component';

describe('GtrEightythreeComponent', () => {
  let component: GtrEightythreeComponent;
  let fixture: ComponentFixture<GtrEightythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrEightythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrEightythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
