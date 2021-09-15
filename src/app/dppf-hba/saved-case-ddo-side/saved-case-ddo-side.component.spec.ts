import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCaseDdoSideComponent } from './saved-case-ddo-side.component';

describe('SavedCaseDdoSideComponent', () => {
  let component: SavedCaseDdoSideComponent;
  let fixture: ComponentFixture<SavedCaseDdoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCaseDdoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCaseDdoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
