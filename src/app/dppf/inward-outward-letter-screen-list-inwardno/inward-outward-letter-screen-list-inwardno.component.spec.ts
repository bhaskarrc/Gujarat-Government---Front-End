import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardOutwardLetterScreenListInwardnoComponent } from './inward-outward-letter-screen-list-inwardno.component';

describe('InwardOutwardLetterScreenListInwardnoComponent', () => {
  let component: InwardOutwardLetterScreenListInwardnoComponent;
  let fixture: ComponentFixture<InwardOutwardLetterScreenListInwardnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardOutwardLetterScreenListInwardnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardOutwardLetterScreenListInwardnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
