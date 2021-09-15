import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantExemptionComponent } from './grant-exemption.component';

describe('GrantExemptionComponent', () => {
  let component: GrantExemptionComponent;
  let fixture: ComponentFixture<GrantExemptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantExemptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
