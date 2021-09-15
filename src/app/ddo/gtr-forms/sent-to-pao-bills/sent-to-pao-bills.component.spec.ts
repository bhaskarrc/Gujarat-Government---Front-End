import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentToPaoBillsComponent } from './sent-to-pao-bills.component';

describe('SentToPaoBillsComponent', () => {
  let component: SentToPaoBillsComponent;
  let fixture: ComponentFixture<SentToPaoBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentToPaoBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentToPaoBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
