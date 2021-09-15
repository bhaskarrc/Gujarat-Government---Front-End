import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAppropriationProcessListComponent } from './re-appropriation-process-list.component';

describe('ReAppropriationProcessListComponent', () => {
  let component: ReAppropriationProcessListComponent;
  let fixture: ComponentFixture<ReAppropriationProcessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReAppropriationProcessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReAppropriationProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
