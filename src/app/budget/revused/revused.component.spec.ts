import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevusedComponent } from './revused.component';

describe('RevusedComponent', () => {
  let component: RevusedComponent;
  let fixture: ComponentFixture<RevusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
