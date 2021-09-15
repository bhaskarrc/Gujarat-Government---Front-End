import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardMrRequestComponent } from './inward-mr-request.component';

describe('InwardMrRequestComponent', () => {
  let component: InwardMrRequestComponent;
  let fixture: ComponentFixture<InwardMrRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardMrRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardMrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
