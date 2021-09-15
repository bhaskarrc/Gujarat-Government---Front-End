import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAgDataComponent } from './gi-ag-data.component';

describe('GiAgDataComponent', () => {
  let component: GiAgDataComponent;
  let fixture: ComponentFixture<GiAgDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAgDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAgDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
