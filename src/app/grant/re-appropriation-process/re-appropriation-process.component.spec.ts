import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAppropriationProcessComponent } from './re-appropriation-process.component';

describe('ReAppropriationProcessComponent', () => {
  let component: ReAppropriationProcessComponent;
  let fixture: ComponentFixture<ReAppropriationProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReAppropriationProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReAppropriationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
