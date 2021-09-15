import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcAdviceReceivedViewComponent } from './lc-advice-received-view.component';

describe('LcAdviceReceivedViewComponent', () => {
  let component: LcAdviceReceivedViewComponent;
  let fixture: ComponentFixture<LcAdviceReceivedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcAdviceReceivedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcAdviceReceivedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
