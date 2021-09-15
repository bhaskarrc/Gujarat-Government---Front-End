import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinuousEstimateDuplicateComponent } from './item-continuous-estimate-duplicate.component';

describe('ItemContinuousEstimateDuplicateComponent', () => {
  let component: ItemContinuousEstimateDuplicateComponent;
  let fixture: ComponentFixture<ItemContinuousEstimateDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContinuousEstimateDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinuousEstimateDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
