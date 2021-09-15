import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCasesPaComputerComponent } from './saved-cases-pa-computer.component';

describe('SavedCasesPaComputerComponent', () => {
  let component: SavedCasesPaComputerComponent;
  let fixture: ComponentFixture<SavedCasesPaComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCasesPaComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCasesPaComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
