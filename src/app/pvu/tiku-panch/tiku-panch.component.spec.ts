import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TikuPanchComponent } from './tiku-panch.component';

describe('TikuPanchComponent', () => {
  let component: TikuPanchComponent;
  let fixture: ComponentFixture<TikuPanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TikuPanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TikuPanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
