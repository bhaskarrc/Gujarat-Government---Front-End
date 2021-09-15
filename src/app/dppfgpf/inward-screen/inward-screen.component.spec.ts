import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardScreenComponent } from './inward-screen.component';

describe('InwardScreenComponent', () => {
  let component: InwardScreenComponent;
  let fixture: ComponentFixture<InwardScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
