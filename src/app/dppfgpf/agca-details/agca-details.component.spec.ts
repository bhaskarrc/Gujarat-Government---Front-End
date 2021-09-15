import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgcaDetailsComponent } from './agca-details.component';

describe('AgcaDetailsComponent', () => {
  let component: AgcaDetailsComponent;
  let fixture: ComponentFixture<AgcaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgcaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgcaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
