import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBillListComponent } from './saved-bill-list.component';

describe('SavedBillListComponent', () => {
  let component: SavedBillListComponent;
  let fixture: ComponentFixture<SavedBillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedBillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
