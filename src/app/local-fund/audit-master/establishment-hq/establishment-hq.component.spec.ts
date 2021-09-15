import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentHqComponent } from './establishment-hq.component';

describe('EstablishmentHqComponent', () => {
  let component: EstablishmentHqComponent;
  let fixture: ComponentFixture<EstablishmentHqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentHqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentHqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
