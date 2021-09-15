import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodCoListComponent } from './hod-co-list.component';

describe('HodCoListComponent', () => {
  let component: HodCoListComponent;
  let fixture: ComponentFixture<HodCoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodCoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodCoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
