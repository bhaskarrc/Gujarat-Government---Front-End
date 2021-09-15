import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingPressMasterViewComponent } from './printing-press-master-view.component';

describe('PrintingPressMasterViewComponent', () => {
  let component: PrintingPressMasterViewComponent;
  let fixture: ComponentFixture<PrintingPressMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingPressMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingPressMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
