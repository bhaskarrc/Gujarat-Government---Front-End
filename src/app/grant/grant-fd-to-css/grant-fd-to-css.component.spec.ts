import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantFdToCssComponent } from './grant-fd-to-css.component';

describe('GrantFdToCssComponent', () => {
  let component: GrantFdToCssComponent;
  let fixture: ComponentFixture<GrantFdToCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantFdToCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantFdToCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
