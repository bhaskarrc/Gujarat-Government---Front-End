import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemViewComponent } from './new-item-view.component';

describe('NewItemViewComponent', () => {
  let component: NewItemViewComponent;
  let fixture: ComponentFixture<NewItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
