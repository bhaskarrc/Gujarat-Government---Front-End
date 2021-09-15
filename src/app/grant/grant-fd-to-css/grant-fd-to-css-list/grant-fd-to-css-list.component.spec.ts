import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantFdToCssListComponent } from './grant-fd-to-css-list.component';

describe('GrantFdToCssListComponent', () => {
  let component: GrantFdToCssListComponent;
  let fixture: ComponentFixture<GrantFdToCssListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantFdToCssListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantFdToCssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
