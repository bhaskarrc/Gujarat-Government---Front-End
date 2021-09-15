import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinuousConsolidateViewComponent } from './item-continuous-consolidate-view.component';

describe('ItemContinuousConsolidateViewComponent', () => {
  let component: ItemContinuousConsolidateViewComponent;
  let fixture: ComponentFixture<ItemContinuousConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContinuousConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinuousConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
