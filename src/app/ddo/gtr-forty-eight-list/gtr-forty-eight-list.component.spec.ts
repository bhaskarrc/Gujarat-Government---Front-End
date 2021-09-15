import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFortyEightListComponent } from './gtr-forty-eight-list.component';

describe('GtrFortyEightListComponent', () => {
  let component: GtrFortyEightListComponent;
  let fixture: ComponentFixture<GtrFortyEightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFortyEightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFortyEightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
