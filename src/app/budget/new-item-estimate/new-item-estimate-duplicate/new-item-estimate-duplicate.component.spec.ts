import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemEstimateDuplicateComponent } from './new-item-estimate-duplicate.component';

describe('NewItemEstimateDuplicateComponent', () => {
  let component: NewItemEstimateDuplicateComponent;
  let fixture: ComponentFixture<NewItemEstimateDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemEstimateDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemEstimateDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
