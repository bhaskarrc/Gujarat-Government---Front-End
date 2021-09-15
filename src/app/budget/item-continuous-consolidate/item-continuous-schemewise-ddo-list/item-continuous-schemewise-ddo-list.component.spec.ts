import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContinuousSchemewiseDdoListComponent } from './item-continuous-schemewise-ddo-list.component';

describe('ItemContinuousSchemewiseDdoListComponent', () => {
  let component: ItemContinuousSchemewiseDdoListComponent;
  let fixture: ComponentFixture<ItemContinuousSchemewiseDdoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContinuousSchemewiseDdoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContinuousSchemewiseDdoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
