import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceToComponent } from './advice-to.component';

describe('AdviceToComponent', () => {
  let component: AdviceToComponent;
  let fixture: ComponentFixture<AdviceToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
