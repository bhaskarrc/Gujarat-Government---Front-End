import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtrFourtySixComponent } from './gtr-fourty-six.component';

describe('GtrFourtySixComponent', () => {
  let component: GtrFourtySixComponent;
  let fixture: ComponentFixture<GtrFourtySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtrFourtySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtrFourtySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
