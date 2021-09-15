import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtyoneComponent } from './sixtyone.component';

describe('SixtyoneComponent', () => {
  let component: SixtyoneComponent;
  let fixture: ComponentFixture<SixtyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixtyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
