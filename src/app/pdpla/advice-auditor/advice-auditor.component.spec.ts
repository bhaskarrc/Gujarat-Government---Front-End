import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceAuditorComponent } from './advice-auditor.component';

describe('AdviceAuditorComponent', () => {
  let component: AdviceAuditorComponent;
  let fixture: ComponentFixture<AdviceAuditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceAuditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
