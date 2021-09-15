import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaAuthorityComponent } from './mla-authority.component';

describe('MlaAuthorityComponent', () => {
  let component: MlaAuthorityComponent;
  let fixture: ComponentFixture<MlaAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlaAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlaAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
