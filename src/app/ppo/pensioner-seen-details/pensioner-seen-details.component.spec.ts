import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerSeenDetailsComponent } from './pensioner-seen-details.component';

describe('PensionerSeenDetailsComponent', () => {
  let component: PensionerSeenDetailsComponent;
  let fixture: ComponentFixture<PensionerSeenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionerSeenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerSeenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
