import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantOfHraComponent } from './grant-of-hra.component';

describe('GrantOfHraComponent', () => {
  let component: GrantOfHraComponent;
  let fixture: ComponentFixture<GrantOfHraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantOfHraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantOfHraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
