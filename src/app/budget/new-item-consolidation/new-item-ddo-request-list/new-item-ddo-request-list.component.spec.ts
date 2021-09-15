import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemDdoRequestListComponent } from './new-item-ddo-request-list.component';

describe('NewItemDdoRequestListComponent', () => {
  let component: NewItemDdoRequestListComponent;
  let fixture: ComponentFixture<NewItemDdoRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemDdoRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemDdoRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
