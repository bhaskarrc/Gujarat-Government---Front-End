import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAnnexureOneComponent } from './saved-annexure-one.component';

describe('SavedAnnexureOneComponent', () => {
  let component: SavedAnnexureOneComponent;
  let fixture: ComponentFixture<SavedAnnexureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAnnexureOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAnnexureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
