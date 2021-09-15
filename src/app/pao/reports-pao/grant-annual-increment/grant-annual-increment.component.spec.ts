import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantAnnualIncrementComponent } from './grant-annual-increment.component';

describe('GrantAnnualIncrementComponent', () => {
  let component: GrantAnnualIncrementComponent;
  let fixture: ComponentFixture<GrantAnnualIncrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantAnnualIncrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAnnualIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
