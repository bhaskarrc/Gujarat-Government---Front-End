import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePreprationComponent } from './cheque-prepration.component';

describe('ChequePreprationComponent', () => {
  let component: ChequePreprationComponent;
  let fixture: ComponentFixture<ChequePreprationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePreprationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePreprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
