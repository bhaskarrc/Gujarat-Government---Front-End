import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgcaDetailsHbaComponent } from './agca-details-hba.component';

describe('AgcaDetailsHbaComponent', () => {
  let component: AgcaDetailsHbaComponent;
  let fixture: ComponentFixture<AgcaDetailsHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgcaDetailsHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgcaDetailsHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
