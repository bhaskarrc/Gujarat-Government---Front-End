import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAnnexureTwoKComponent } from './saved-annexure-two-k.component';

describe('SavedAnnexureTwoKComponent', () => {
  let component: SavedAnnexureTwoKComponent;
  let fixture: ComponentFixture<SavedAnnexureTwoKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAnnexureTwoKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAnnexureTwoKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
