import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentBodiesDetailsComponent } from './independent-bodies-details.component';

describe('IndependentBodiesDetailsComponent', () => {
  let component: IndependentBodiesDetailsComponent;
  let fixture: ComponentFixture<IndependentBodiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependentBodiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentBodiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
