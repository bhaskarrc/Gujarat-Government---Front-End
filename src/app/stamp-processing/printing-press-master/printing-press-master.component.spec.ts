import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingPressMasterComponent } from './printing-press-master.component';

describe('PrintingPressMasterComponent', () => {
  let component: PrintingPressMasterComponent;
  let fixture: ComponentFixture<PrintingPressMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingPressMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingPressMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
