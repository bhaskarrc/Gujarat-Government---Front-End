import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCasesPaOneTwoComponent } from './saved-cases-pa-one-two.component';

describe('SavedCasesPaOneTwoComponent', () => {
  let component: SavedCasesPaOneTwoComponent;
  let fixture: ComponentFixture<SavedCasesPaOneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCasesPaOneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCasesPaOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
