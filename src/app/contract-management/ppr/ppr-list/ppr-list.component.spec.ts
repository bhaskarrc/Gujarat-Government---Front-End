import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprListComponent } from './ppr-list.component';

describe('PprListComponent', () => {
  let component: PprListComponent;
  let fixture: ComponentFixture<PprListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
