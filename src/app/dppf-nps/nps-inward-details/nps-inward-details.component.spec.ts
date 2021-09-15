import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsInwardDetailsComponent } from './nps-inward-details.component';

describe('NpsInwardDetailsComponent', () => {
  let component: NpsInwardDetailsComponent;
  let fixture: ComponentFixture<NpsInwardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsInwardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsInwardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
