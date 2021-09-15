import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtcListComponent } from './utc-list.component';

describe('UtcListComponent', () => {
  let component: UtcListComponent;
  let fixture: ComponentFixture<UtcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
