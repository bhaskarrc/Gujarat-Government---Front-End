import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdReceivedAddComponent } from './emd-received-add.component';

describe('EmdReceivedAddComponent', () => {
  let component: EmdReceivedAddComponent;
  let fixture: ComponentFixture<EmdReceivedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdReceivedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdReceivedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
