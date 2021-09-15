import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMasterViewComponent } from './category-master-view.component';

describe('CategoryMasterViewComponent', () => {
  let component: CategoryMasterViewComponent;
  let fixture: ComponentFixture<CategoryMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
