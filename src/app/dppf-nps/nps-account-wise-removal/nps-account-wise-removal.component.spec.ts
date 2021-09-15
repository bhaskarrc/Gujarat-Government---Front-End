import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountWiseRemovalComponent } from './nps-account-wise-removal.component';

describe('NpsAccountWiseRemovalComponent', () => {
  let component: NpsAccountWiseRemovalComponent;
  let fixture: ComponentFixture<NpsAccountWiseRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountWiseRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountWiseRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
