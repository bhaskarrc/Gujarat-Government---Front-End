import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsOutwardDetailsComponent } from './nps-outward-details.component';

describe('NpsOutwardDetailsComponent', () => {
  let component: NpsOutwardDetailsComponent;
  let fixture: ComponentFixture<NpsOutwardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsOutwardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsOutwardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
