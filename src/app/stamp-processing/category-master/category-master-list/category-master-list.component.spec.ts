import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMasterListComponent } from './category-master-list.component';

describe('CategoryMasterListComponent', () => {
  let component: CategoryMasterListComponent;
  let fixture: ComponentFixture<CategoryMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
