import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAnnexureTwoComponent } from './saved-annexure-two.component';

describe('SavedAnnexureTwoComponent', () => {
  let component: SavedAnnexureTwoComponent;
  let fixture: ComponentFixture<SavedAnnexureTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAnnexureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAnnexureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
