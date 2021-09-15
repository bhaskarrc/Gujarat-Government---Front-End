import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoOfficesComponent } from './ddo-offices.component';

describe('DdoOfficesComponent', () => {
  let component: DdoOfficesComponent;
  let fixture: ComponentFixture<DdoOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
