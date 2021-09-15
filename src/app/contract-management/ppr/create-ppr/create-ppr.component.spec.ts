import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePprComponent } from './create-ppr.component';

describe('CreatePprComponent', () => {
  let component: CreatePprComponent;
  let fixture: ComponentFixture<CreatePprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
