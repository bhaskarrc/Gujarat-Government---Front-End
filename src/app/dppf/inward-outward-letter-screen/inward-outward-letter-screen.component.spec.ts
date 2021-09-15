import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardOutwardLetterScreenComponent } from './inward-outward-letter-screen.component';

describe('InwardOutwardLetterScreenComponent', () => {
  let component: InwardOutwardLetterScreenComponent;
  let fixture: ComponentFixture<InwardOutwardLetterScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardOutwardLetterScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardOutwardLetterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
