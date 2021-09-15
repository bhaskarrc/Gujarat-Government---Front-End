import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtytwoAComponent } from './sixtytwo-a.component';

describe('SixtytwoAComponent', () => {
  let component: SixtytwoAComponent;
  let fixture: ComponentFixture<SixtytwoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixtytwoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtytwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
