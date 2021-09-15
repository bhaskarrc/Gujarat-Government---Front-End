import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvuComponent } from './pvu.component';

describe('PvuComponent', () => {
  let component: PvuComponent;
  let fixture: ComponentFixture<PvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
