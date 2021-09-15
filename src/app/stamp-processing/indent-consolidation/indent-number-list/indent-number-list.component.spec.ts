import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentNumberListComponent } from './indent-number-list.component';

describe('IndentNumberListComponent', () => {
  let component: IndentNumberListComponent;
  let fixture: ComponentFixture<IndentNumberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentNumberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
