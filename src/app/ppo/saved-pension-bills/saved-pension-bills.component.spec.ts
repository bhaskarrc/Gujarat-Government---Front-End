import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPensionBillsComponent } from './saved-pension-bills.component';

describe('SavedPensionBillsComponent', () => {
  let component: SavedPensionBillsComponent;
  let fixture: ComponentFixture<SavedPensionBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPensionBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPensionBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
