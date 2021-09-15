import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingPressMasterListComponent } from './printing-press-master-list.component';

describe('PrintingPressMasterListComponent', () => {
  let component: PrintingPressMasterListComponent;
  let fixture: ComponentFixture<PrintingPressMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingPressMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingPressMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
