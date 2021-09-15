import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingchargelistDuplicateComponent } from './standingchargelist-duplicate.component';

describe('StandingchargelistDuplicateComponent', () => {
  let component: StandingchargelistDuplicateComponent;
  let fixture: ComponentFixture<StandingchargelistDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingchargelistDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingchargelistDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
