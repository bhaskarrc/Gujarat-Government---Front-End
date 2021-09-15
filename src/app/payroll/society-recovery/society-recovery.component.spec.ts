import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyRecoveryComponent } from './society-recovery.component';

describe('SocietyRecoveryComponent', () => {
  let component: SocietyRecoveryComponent;
  let fixture: ComponentFixture<SocietyRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
