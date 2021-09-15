import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemEstimatesListComponent } from './new-item-estimates-list.component';

describe('NewItemEstimatesListComponent', () => {
  let component: NewItemEstimatesListComponent;
  let fixture: ComponentFixture<NewItemEstimatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemEstimatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemEstimatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
