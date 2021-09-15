import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemConsolidationComponent } from './new-item-consolidate.component';

describe('NewItemConsolidationComponent', () => {
  let component: NewItemConsolidationComponent;
  let fixture: ComponentFixture<NewItemConsolidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemConsolidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemConsolidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
