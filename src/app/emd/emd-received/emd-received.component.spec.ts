import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdReceivedComponent } from './emd-received.component';

describe('EmdReceivedComponent', () => {
  let component: EmdReceivedComponent;
  let fixture: ComponentFixture<EmdReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
