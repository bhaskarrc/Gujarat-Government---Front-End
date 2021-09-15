import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBillFourtySixComponent } from './saved-bill-fourty-six.component';

describe('SavedBillFourtySixComponent', () => {
  let component: SavedBillFourtySixComponent;
  let fixture: ComponentFixture<SavedBillFourtySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedBillFourtySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedBillFourtySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
