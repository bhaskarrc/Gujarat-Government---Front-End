import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SloDetailsComponent } from './slo-details.component';

describe('SloDetailsComponent', () => {
  let component: SloDetailsComponent;
  let fixture: ComponentFixture<SloDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SloDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
