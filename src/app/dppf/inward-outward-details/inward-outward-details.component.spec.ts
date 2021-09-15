import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardOutwardDetailsComponent } from './inward-outward-details.component';

describe('InwardOutwardDetailsComponent', () => {
  let component: InwardOutwardDetailsComponent;
  let fixture: ComponentFixture<InwardOutwardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardOutwardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardOutwardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
