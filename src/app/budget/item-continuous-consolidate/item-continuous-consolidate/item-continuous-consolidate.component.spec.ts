import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinuousConsolidateComponent } from './item-continuous-consolidate.component';

describe('ItemContinuousConsolidateComponent', () => {
  let component: ItemContinuousConsolidateComponent;
  let fixture: ComponentFixture<ItemContinuousConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContinuousConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinuousConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
