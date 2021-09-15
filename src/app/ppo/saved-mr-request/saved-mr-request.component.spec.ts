import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMrRequestComponent } from './saved-mr-request.component';

describe('SavedMrRequestComponent', () => {
  let component: SavedMrRequestComponent;
  let fixture: ComponentFixture<SavedMrRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedMrRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
