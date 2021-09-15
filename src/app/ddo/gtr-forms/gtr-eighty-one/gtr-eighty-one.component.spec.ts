import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrEightyOneComponent } from './gtr-eighty-one.component';

describe('GtrEightyOneComponent', () => {
  let component: GtrEightyOneComponent;
  let fixture: ComponentFixture<GtrEightyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrEightyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrEightyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
