import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShowComponent } from './grid-show.component';

describe('GridShowComponent', () => {
  let component: GridShowComponent;
  let fixture: ComponentFixture<GridShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
