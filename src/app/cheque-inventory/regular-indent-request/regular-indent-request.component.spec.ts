import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularIndentRequestComponent } from './regular-indent-request.component';

describe('RegularIndentRequestComponent', () => {
  let component: RegularIndentRequestComponent;
  let fixture: ComponentFixture<RegularIndentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularIndentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularIndentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
