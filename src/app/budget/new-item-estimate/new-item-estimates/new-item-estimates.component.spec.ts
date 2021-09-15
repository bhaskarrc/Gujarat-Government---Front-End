import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemEstimatesComponent } from './new-item-estimates.component';

describe('NewItemEstimatesComponent', () => {
  let component: NewItemEstimatesComponent;
  let fixture: ComponentFixture<NewItemEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
