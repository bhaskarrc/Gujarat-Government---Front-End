import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReDistributionComponent } from './ex-re-distribution.component';

describe('ExReDistributionComponent', () => {
  let component: ExReDistributionComponent;
  let fixture: ComponentFixture<ExReDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExReDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExReDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
