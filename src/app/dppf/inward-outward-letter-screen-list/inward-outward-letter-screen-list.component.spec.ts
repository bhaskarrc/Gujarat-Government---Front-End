import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardOutwardLetterScreenListComponent } from './inward-outward-letter-screen-list.component';

describe('InwardOutwardLetterScreenListComponent', () => {
  let component: InwardOutwardLetterScreenListComponent;
  let fixture: ComponentFixture<InwardOutwardLetterScreenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardOutwardLetterScreenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardOutwardLetterScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
