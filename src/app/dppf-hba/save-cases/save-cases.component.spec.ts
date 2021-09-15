import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCasesComponent } from './save-cases.component';

describe('SaveCasesComponent', () => {
  let component: SaveCasesComponent;
  let fixture: ComponentFixture<SaveCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
