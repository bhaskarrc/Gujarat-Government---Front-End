import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSupplementaryRequestComponent } from './saved-supplementary-request.component';

describe('SavedSupplementaryRequestComponent', () => {
  let component: SavedSupplementaryRequestComponent;
  let fixture: ComponentFixture<SavedSupplementaryRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedSupplementaryRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSupplementaryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
