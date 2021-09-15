import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedComponent } from './revised.component';

describe('RevisedComponent', () => {
  let component: RevisedComponent;
  let fixture: ComponentFixture<RevisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
