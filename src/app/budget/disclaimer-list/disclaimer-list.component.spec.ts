import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerListComponent } from './disclaimer-list.component';

describe('DisclaimerListComponent', () => {
  let component: DisclaimerListComponent;
  let fixture: ComponentFixture<DisclaimerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
