import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeCaseComponent } from './distribute-case.component';

describe('DistributeCaseComponent', () => {
  let component: DistributeCaseComponent;
  let fixture: ComponentFixture<DistributeCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
