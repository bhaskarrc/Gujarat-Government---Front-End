import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMlaBillComponent } from './print-mla-bill.component';

describe('PrintMlaBillComponent', () => {
  let component: PrintMlaBillComponent;
  let fixture: ComponentFixture<PrintMlaBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMlaBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMlaBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
