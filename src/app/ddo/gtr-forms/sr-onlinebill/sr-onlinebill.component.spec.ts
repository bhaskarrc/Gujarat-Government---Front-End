import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrOnlinebillComponent } from './sr-onlinebill.component';

describe('SrOnlinebillComponent', () => {
  let component: SrOnlinebillComponent;
  let fixture: ComponentFixture<SrOnlinebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrOnlinebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrOnlinebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
