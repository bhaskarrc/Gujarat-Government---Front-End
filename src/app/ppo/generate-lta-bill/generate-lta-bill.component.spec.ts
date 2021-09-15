import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLtaBillComponent } from './generate-lta-bill.component';

describe('GenerateLtaBillComponent', () => {
  let component: GenerateLtaBillComponent;
  let fixture: ComponentFixture<GenerateLtaBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLtaBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLtaBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
