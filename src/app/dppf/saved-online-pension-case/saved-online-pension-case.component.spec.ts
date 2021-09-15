import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedOnlinePensionCaseComponent } from './saved-online-pension-case.component';

describe('SavedOnlinePensionCaseComponent', () => {
  let component: SavedOnlinePensionCaseComponent;
  let fixture: ComponentFixture<SavedOnlinePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedOnlinePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedOnlinePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
