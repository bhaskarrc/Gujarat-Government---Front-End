import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinuousConsolidateListComponent } from './item-continuous-consolidate-list.component';

describe('ItemContinuousConsolidateListComponent', () => {
  let component: ItemContinuousConsolidateListComponent;
  let fixture: ComponentFixture<ItemContinuousConsolidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContinuousConsolidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinuousConsolidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
